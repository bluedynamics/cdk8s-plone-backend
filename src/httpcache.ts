import * as fs from 'fs';
import * as path from 'path';
import { Helm } from 'cdk8s';
import { Construct } from 'constructs';
import { Plone } from './plone';

export interface PloneHttpCacheOptions {
  /**
   * plone chart
   * @default - none
   */
  readonly plone: Plone;

  /** varnishVcl
   * @default - file in config folder
   */
  readonly varnishVcl?: string;

  /** varnishVclFile
   * @default - undefined
   */
  readonly varnishVclFile?: string | undefined;

  // resources
  readonly limitCpu?: string;
  readonly limitMemory?: string;
  readonly requestCpu?: string;
  readonly requestMemory?: string;
}

export class PloneHttpcache extends Construct {

  public readonly httpcacheServiceName: string;

  constructor(scope: Construct, id: string, options: PloneHttpCacheOptions) {
    super(scope, id);
    let varnishVcl: string;
    if (!options.varnishVcl) {
      let vclPath: string;
      if (!options.varnishVclFile) {
        vclPath = path.join(__dirname, 'config', 'varnish.tpl.vcl');
      } else {
        vclPath = options.varnishVclFile;
      }
      varnishVcl = fs.readFileSync(vclPath, 'utf8');
      throw new Error(varnishVcl);
    } else {
      varnishVcl = options.varnishVcl;
    }
    const httpcache = new Helm(this, 'httpcache', {
      repo: 'https://helm.mittwald.de',
      chart: 'kube-httpcache',
      values: {
        replicaCount: 2,
        cache: {
          // need to looks at the frontendWatch, do we need it?
          frontendWatch: false,
          backendWatch: false,
        },
        vclTemplate: varnishVcl,
        extraEnvVars: [
          { name: 'BACKEND_SERVICE_NAME', value: options.plone.backendServiceName },
          { name: 'BACKEND_SERVICE_PORT', value: '8080' },
          { name: 'FRONTEND_SERVICE_NAME', value: options.plone.frontendServiceName },
          { name: 'FRONTEND_SERVICE_PORT', value: '3000' },
        ],
        resources: {
          limits: {
            cpu: options.limitCpu || '500m',
            memory: options.limitMemory || '500Mi',
          },
          requests: {
            cpu: options.requestCpu || '100m',
            memory: options.requestMemory || '100Mi',
          },
        },
        rbac: {
          enabled: false,
        },
        exporter: {
          enabled: true,
          resources: {
            limits: {
              cpu: '100m',
              memory: '100Mi',
            },
            requests: {
              cpu: '10m',
              memory: '50Mi',
            },
          },
        },
        serviceMonitor: {
          enabled: true,
          scrapeSignaller: true,
        },
      },
    });
    const httpcacheService = httpcache.apiObjects.find((construct) => {
      if ((construct.kind === 'Service') && (construct.metadata.name?.endsWith('kube-httpcache'))) {
        return construct.name;
      }
      return undefined;
    });
    if (httpcacheService === undefined) {
      throw new Error('Could not find httpcache service');
    }
    this.httpcacheServiceName = httpcacheService.name;
  }
}
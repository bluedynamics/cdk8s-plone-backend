import { Names } from 'cdk8s';
import * as kplus from 'cdk8s-plus-24';
import { Construct } from 'constructs';
import { PloneDeployment } from './deployment';
import { PloneService } from './service';

export interface PloneOptions {
  readonly backendImage?: string;
  readonly backendImagePullSecret?: string;
  readonly backendImagePullPolicy?: string;
  readonly backendReplicas?: number;
  readonly backendMaxUnavailable?: number | string;
  readonly backendMinAvailable?: number | string;
  readonly backendEnvironment?: kplus.Env;

  readonly frontendImage?: string;
  readonly frontendImagePullSecret?: string;
  readonly frontendImagePullPolicy?: string;
  readonly frontendReplicas?: number;
  readonly frontendMaxUnavailable?: number | string;
  readonly frontendMinAvailable?: number | string;
  readonly frontendEnvironment?: kplus.Env;
}

export class Plone extends Construct {

  public readonly backendServiceName: string;
  public readonly frontendServiceName: string;

  constructor(scope: Construct, id: string, options: PloneOptions = {}) {
    super(scope, id);

    // Backend
    const backendPort = 8080;
    const backendDeployment = new PloneDeployment(this, 'backend', {
      image: {
        image: options.backendImage ?? 'plone/plone-backend:latest',
        imagePullSecret: options.backendImagePullSecret ?? '',
        imagePullPolicy: options.backendImagePullPolicy ?? 'ifNotPresent',
      },
      replicas: options.backendReplicas,
      pdb: {
        maxUnavailable: options.backendMaxUnavailable ?? undefined,
        minAvailable: options.backendMinAvailable ?? undefined,
      },
      port: backendPort,
      environment: options.backendEnvironment,
    });
    const backendService = new PloneService(backendDeployment, 'service', {
      targetPort: backendPort,
      selectorLabel: { app: Names.toLabelValue(backendDeployment) },
    });
    this.backendServiceName = backendService.name;

    // Frontend
    const frontendPort = 3000;
    var frontendEnvironment = options.frontendEnvironment ?? new kplus.Env([], {});
    if (frontendEnvironment.variables.RAZZLE_API_PATH === undefined) {
      frontendEnvironment?.addVariable('RAZZLE_INTERNAL_API_PATH', kplus.EnvValue.fromValue(`http://${backendService.name}:80`));
    }

    const frontendDeployment = new PloneDeployment(this, 'frontend', {
      image: {
        image: options.frontendImage ?? 'plone/plone-frontend:latest',
        imagePullSecret: options.frontendImagePullSecret ?? '',
        imagePullPolicy: options.frontendImagePullPolicy ?? 'ifNotPresent',
      },
      replicas: options.frontendReplicas,
      pdb: {
        maxUnavailable: options.frontendMaxUnavailable ?? undefined,
        minAvailable: options.frontendMinAvailable ?? undefined,
      },
      port: frontendPort,
      environment: frontendEnvironment,
    });
    const frontendService = new PloneService(frontendDeployment, 'service', {
      targetPort: frontendPort,
      selectorLabel: { app: Names.toLabelValue(frontendDeployment) },
    });
    this.frontendServiceName = frontendService.name;
  }
}
import { Names } from 'cdk8s';
import * as kplus from 'cdk8s-plus-24';
import { Construct } from 'constructs';
import { PloneDeployment } from './deployment';
import { PloneService } from './service';

export interface PloneBaseOptions {
  readonly image?: string;
  readonly imagePullPolicy?: string;
  readonly replicas?: number;
  readonly maxUnavailable?: number | string;
  readonly minAvailable?: number | string;
  readonly limitCpu?: number;
  readonly limitMemory?: string;
  readonly environment?: kplus.Env;
}
export interface PloneOptions {
  readonly backend?: PloneBaseOptions;
  readonly frontend?: PloneBaseOptions;
  readonly imagePullSecrets?: string[];
}

export class Plone extends Construct {

  public readonly backendServiceName: string;
  public readonly frontendServiceName: string;

  constructor(scope: Construct, id: string, options: PloneOptions = {}) {
    super(scope, id);

    // Backend
    const backend = options.backend ?? {};
    const backendPort = 8080;
    const backendDeployment = new PloneDeployment(this, 'backend', {
      image: {
        image: backend.image ?? 'plone/plone-backend:latest',
        imagePullSecrets: options.imagePullSecrets ?? [],
        imagePullPolicy: backend.imagePullPolicy ?? 'IfNotPresent',
      },
      replicas: backend.replicas,
      limitCpu: backend.limitCpu ?? 1,
      limitMemory: backend.limitMemory ?? '512Mi',
      pdb: {
        maxUnavailable: backend.maxUnavailable ?? undefined,
        minAvailable: backend.minAvailable ?? undefined,
      },
      port: backendPort,
      environment: backend.environment,
    });
    const backendService = new PloneService(backendDeployment, 'service', {
      targetPort: backendPort,
      selectorLabel: { app: Names.toLabelValue(backendDeployment) },
    });
    this.backendServiceName = backendService.name;

    // Frontend
    const frontend = options.frontend ?? {};
    const frontendPort = 3000;
    var frontendEnvironment =frontend.environment ?? new kplus.Env([], {});
    if (frontendEnvironment.variables.RAZZLE_INTERNAL_API_PATH === undefined) {
      frontendEnvironment?.addVariable('RAZZLE_INTERNAL_API_PATH', kplus.EnvValue.fromValue(`http://${backendService.name}:80`));
    }

    const frontendDeployment = new PloneDeployment(this, 'frontend', {
      image: {
        image: frontend.image ?? 'plone/plone-frontend:latest',
        imagePullSecrets: options.imagePullSecrets ?? [],
        imagePullPolicy: frontend.imagePullPolicy ?? 'IfNotPresent',
      },
      replicas: frontend.replicas,
      limitCpu: frontend.limitCpu ?? 1,
      limitMemory: frontend.limitMemory ?? '1Gi',
      pdb: {
        maxUnavailable: frontend.maxUnavailable ?? undefined,
        minAvailable: frontend.minAvailable ?? undefined,
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
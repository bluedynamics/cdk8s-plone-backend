// eslint-disable-next-line import/no-extraneous-dependencies
import { Names } from 'cdk8s';
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
  readonly backendEnvironment?: string;

  readonly frontendImage?: string;
  readonly frontendImagePullSecret?: string;
  readonly frontendImagePullPolicy?: string;
  readonly frontendReplicas?: number;
  readonly frontendMaxUnavailable?: number | string;
  readonly frontendMinAvailable?: number | string;
  readonly frontendEnvironment?: string;
}

export class Plone extends Construct {

  constructor(scope: Construct, id: string, options: PloneOptions = {}) {
    super(scope, id);

    // Backend
    const backendPort = 8080;
    const backendDeployment = new PloneDeployment(this, 'backend', {
      image: {
        image: options.backendImage ?? 'plone/plone-backend:latest',
        imagePullSecret: options.backendImagePullSecret ?? '',
        imagePullPolicy: options.backendImagePullPolicy ?? 'always',
      },
      replicas: options.backendReplicas,
      pdb: {
        maxUnavailable: options.backendMaxUnavailable ?? undefined,
        minAvailable: options.backendMinAvailable ?? undefined,
      },
      port: backendPort,
      // environment: options.backendEnvironment,
    });
    new PloneService(backendDeployment, 'service', {
      targetPort: backendPort,
      selectorLabel: { app: Names.toLabelValue(backendDeployment) },
    });

    // Frontend
    const frontendPort = 3000;
    const frontendDeployment = new PloneDeployment(this, 'frontend', {
      image: {
        image: options.frontendImage ?? 'plone/plone-frontend:latest',
        imagePullSecret: options.frontendImagePullSecret ?? '',
        imagePullPolicy: options.frontendImagePullPolicy ?? 'always',
      },
      replicas: options.frontendReplicas,
      pdb: {
        maxUnavailable: options.frontendMaxUnavailable ?? undefined,
        minAvailable: options.frontendMinAvailable ?? undefined,
      },
      port: frontendPort,
      // environment: options.frontendEnvironment,
    });
    new PloneService(frontendDeployment, 'service', {
      targetPort: frontendPort,
      selectorLabel: { app: Names.toLabelValue(frontendDeployment) },
    });
  }
}
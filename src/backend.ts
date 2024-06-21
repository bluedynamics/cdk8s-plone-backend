import { Names } from 'cdk8s';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import { PloneBackendDeploymentOptions, PloneBackendDeployment } from './backend-deployment';
import { PloneBackendServiceOptions, PloneBackendService } from './backend-service';

export interface PloneBackendOptions {
  readonly deployment?: PloneBackendDeploymentOptions;
  readonly service?: PloneBackendServiceOptions;
}

export class PloneBackend extends Construct {

  constructor(scope: Construct, id: string, options: PloneBackendOptions = {}) {
    super(scope, id);
    const deploymentOptions = options.deployment ?? {};

    // Create a deployment
    const deployment = new PloneBackendDeployment(this, 'deployment', deploymentOptions);

    // Create a service
    const serviceOptions = {
      ...options.service ?? {},
      selectorLabel: { app: Names.toLabelValue(deployment) },
    };
    new PloneBackendService(this, 'service', serviceOptions);
  }
}

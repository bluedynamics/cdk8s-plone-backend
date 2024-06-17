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
    const deployment = options.deployment ?? {};
    const service = options.service ?? {};

    // Create a deployment
    new PloneBackendDeployment(this, 'deployment', deployment);

    // Create a service
    new PloneBackendService(this, 'service', service);
  }
}

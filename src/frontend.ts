import { Names } from 'cdk8s';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import { PloneFrontendDeploymentOptions, PloneFrontendDeployment } from './frontend-deployment';
import { PloneFrontendServiceOptions, PloneFrontendService } from './frontend-service';

export interface PloneFrontendOptions {
  readonly deployment?: PloneFrontendDeploymentOptions;
  readonly service?: PloneFrontendServiceOptions;
}

export class PloneFrontend extends Construct {

  constructor(scope: Construct, id: string, options: PloneFrontendOptions = {}) {
    super(scope, id);
    const deploymentOptions = options.deployment ?? {};

    // Create a deployment
    const deployment = new PloneFrontendDeployment(this, 'deployment', deploymentOptions);

    // Create a service
    const serviceOptions = {
      ...options.service ?? {},
      selectorLabel: { app: Names.toLabelValue(deployment) },
    };
    new PloneFrontendService(this, 'service', serviceOptions);
  }
}

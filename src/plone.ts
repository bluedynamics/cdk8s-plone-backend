// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import { PloneBackend, PloneBackendOptions } from './backend';
import { PloneFrontend, PloneFrontendOptions } from './frontend';

export interface PloneOptions {
  readonly frontend?: PloneFrontendOptions;
  readonly backend?: PloneBackendOptions;
}

export class Plone extends Construct {

  constructor(scope: Construct, id: string, options: PloneOptions = {}) {
    super(scope, id);
    const frontendOptions = options.frontend ?? {};
    const backendOptions = options.backend ?? {};
    new PloneBackend(this, 'backend', backendOptions);
    new PloneFrontend(this, 'frontend', frontendOptions);
  }
}
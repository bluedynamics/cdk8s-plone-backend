import { Construct } from 'constructs';

export interface PloneBackendServiceOptions {
  /**
   * Port number.
   * @default 8080
   */
  readonly port?: number;

  /**
   * Extra labels to associate with resources.
   * @default - none
   */
  readonly labels?: { [name: string]: string };
}

export class PloneBackendService extends Construct {

  constructor(scope: Construct, id: string, options: PloneBackendServiceOptions = {}) {
    super(scope, id);
    const port = options.port ?? 8080;
    const labels = options.labels ?? {};
  }
}

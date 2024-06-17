import { Construct } from 'constructs';

export interface PloneBackendDeploymentOptions {
  /**
   * Specify a custom image for Plone Backend.
   * @default "plone/plone-backend:latest"
   */
  readonly image?: string;

  /**
 * Number of replicas.
 * @default 2
 */
  readonly replicas?: number;

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

export class PloneBackendDeployment extends Construct {

  constructor(scope: Construct, id: string, options: PloneBackendDeploymentOptions = { }) {
    super(scope, id);
    const baseImage = options.image ?? 'plone/plone-backend:latest';
    const replicas = options.replicas ?? 2;
    const port = options.port ?? 8080;
    const labels = options.labels ?? {};
  }
}

import { Names } from 'cdk8s';
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';

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
    const image = options.image ?? 'plone/plone-backend:latest';
    const replicas = options.replicas ?? 2;
    const label = { app: Names.toLabelValue(this) };
    const labels = {
      ...options.labels ?? {},
      ...label,
    };
    const deployment_name = id + '-deployment';
    const pod_name = id + '-pod';

    const deploymentOpts: k8s.KubeDeploymentProps = {
      metadata: {
        name: deployment_name,
      },
      spec: {
        replicas,
        selector: {
          matchLabels: label,
        },
        template: {
          metadata: { labels: labels },
          spec: {
            containers: [
              {
                name: pod_name,
                image: image,
              },
            ],
          },
        },
      },
    };

    new k8s.KubeDeployment(this, 'deployment', deploymentOpts);
  }
}

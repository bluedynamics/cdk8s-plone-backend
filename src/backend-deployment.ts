import { Names } from 'cdk8s';
// eslint-disable-next-line import/no-extraneous-dependencies
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
    const template_labels = {
      ...options.labels ?? {},
      ...label,
    };

    const deploymentOpts: k8s.KubeDeploymentProps = {
      metadata: {
        labels: options.labels ?? {},
      },
      spec: {
        replicas,
        selector: {
          matchLabels: label,
        },
        template: {
          metadata: { labels: template_labels },
          spec: {
            containers: [
              {
                name: id + '-container', // here the namespaced name shold be used, but how?
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

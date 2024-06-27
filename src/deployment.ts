import { Names } from 'cdk8s';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';
import { PlonePDB, PlonePDBOptions } from './pdb';

export interface PloneImageOptions {
  /**
   * Specify a custom image for Plone .
   * @default ""
   */
  readonly image?: string;

  /**
   * Specify Secret to pull image .
   * @default ""
   */
  readonly imagePullSecret?: string;

  /**
   * Specify Pull Policy .
   * @default ""
   */
  readonly imagePullPolicy?: string;
}

export interface PloneDeploymentOptions {
  /**
   * Specify a custom image for Plone .
   * @default "plone/plone-backend:latest"
   */
  readonly image?: PloneImageOptions;

  /**
 * Number of replicas.
 * @default 2
 */
  readonly replicas?: number;

  /**
   * Port number.
   */
  readonly port: number;

  /**
   * Extra labels to associate with resources.
   * @default - none
   */
  readonly labels?: { [name: string]: string };

  /**
   * Extra container spec to use for ploencontainer.
   * @default - []
   */
  readonly ploneContainer?: k8s.Container;

  /**
   * Sidecar container spec to associate with resources.
   * @default - []
   */
  readonly sidecarContainers?: k8s.Container[];

  /**
   * Create a PodDisruptionBugdet for the deployment?
   * If given
   * @default - none
   */
  readonly pdb?: PlonePDBOptions;
}

export class PloneDeployment extends Construct {

  constructor(scope: Construct, id: string, options: PloneDeploymentOptions) {
    super(scope, id);
    const image = options.image ?? {};
    const replicas = options.replicas ?? 2;
    const label = { app: Names.toLabelValue(this) };
    const template_labels = {
      ...options.labels ?? {},
      ...label,
    };
    var ploneContainerSpec = {
      ...options.ploneContainer ?? {},
      name: id + '-container', // here the namespaced name shold be used, but how?
      image: image.image,
      imagePullPolicy: image.imagePullPolicy,
      imagePullSecret: { name: image.imagePullSecret },
    };
    const deploymentOptions: k8s.KubeDeploymentProps = {
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
              ploneContainerSpec,
              ...options.sidecarContainers ?? [],
            ],
          },
        },
      },
    };

    new k8s.KubeDeployment(this, 'deployment', deploymentOptions);

    if (options.pdb ?? false) {
      const pdbOptions = options.pdb ?? {};
      new PlonePDB(this, 'pdb', label, pdbOptions);
    }
  }
}

import { Names } from 'cdk8s';
import * as kplus from 'cdk8s-plus-24';
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
  readonly imagePullSecrets?: string[];

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
   * Specify an environment for Plone .
   * @default - none
  */
  readonly environment?: kplus.Env;

  /**
 * Number of replicas.
 * @default 2
 */
  readonly replicas?: number;

  /**
 * CPU limit
 * @default 1
 */
  readonly limitCpu?: number;

  /**
 * memory limit
 * @default 1
 */
  readonly limitMemory?: string;

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
  readonly sidecars?: k8s.Container[];

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
    const optionLabels = options.labels ?? {};
    const deploymentLabels = {
      'app.kubernetes.io/name': optionLabels['app.kubernetes.io/name'] + '-deployment',
      'app.kubernetes.io/component': optionLabels['app.kubernetes.io/component'] ?? '' + '-deployment',
    };
    const template_labels = {
      ...optionLabels,
      ...label,
      'app.kubernetes.io/part-of': 'plone',
      'app.kubernetes.io/managed-by': 'cdk8s-plone',
    };
    const kpEnv = options.environment ?? new kplus.Env([], {});
    var env: k8s.EnvVar[] = [];
    var envFrom: k8s.EnvFromSource[] = [];
    for (const name in kpEnv.variables) {
      env.push({ name: name, value: kpEnv.variables[name].value });
    }
    // for (const source in kpEnv.sources) {
    //   envFrom.push({ configMapRef: source.configMap, prefix: source.prefix, secretRef: source.sec });
    // }
    var ploneContainerSpec: k8s.Container = {
      name: id + '-container', // here the namespaced name shold be used, but how?
      image: image.image,
      imagePullPolicy: image.imagePullPolicy,
      env: env,
      envFrom: envFrom,
      resources: {
        limits: {
          cpu: k8s.Quantity.fromNumber(options.limitCpu ?? 1),
          memory: k8s.Quantity.fromString(options.limitMemory ?? '1Gi'),
        },
      },
    };
    const deploymentOptions: k8s.KubeDeploymentProps = {
      metadata: {
        labels: deploymentLabels,
      },
      spec: {
        replicas,
        selector: {
          matchLabels: label,
        },
        template: {
          metadata: { labels: template_labels },
          spec: {
            imagePullSecrets: (image.imagePullSecrets ?? []).map((name) => ({ name: name })),
            containers: [
              ploneContainerSpec,
              ...options.sidecars ?? [],
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

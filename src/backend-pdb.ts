// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import { IntOrString, KubePodDisruptionBudget } from './imports/k8s';

export interface PloneBackendPDBOptions {
  /**
   * maxUnavailable specification
   * @default - none
   */
  readonly maxUnavailable?: number | string;

  /**
   * minAvailable specification.
   * @default 1
   */
  readonly minAvailable?: number | string;

  /**
   * Selector label.
   */
  readonly selectorLabel: { [name: string]: string };

  /**
   * Extra labels to associate with resources.
   * @default - none
   */
  readonly labels?: { [name: string]: string };
}

export class PloneBackendPDB extends Construct {

  constructor(scope: Construct, id: string, options: PloneBackendPDBOptions) {
    super(scope, id);

    var maxUnavailable: IntOrString = IntOrString.fromString(''); // default value
    if (typeof maxUnavailable === 'number') {
      maxUnavailable = IntOrString.fromNumber(options.maxUnavailable as number);
    } else if (typeof maxUnavailable === 'string') {
      maxUnavailable = IntOrString.fromString(options.maxUnavailable as string);
    }
    var minAvailable: IntOrString = IntOrString.fromString(''); // default value
    if (typeof minAvailable === 'number') {
      minAvailable = IntOrString.fromNumber(options.minAvailable as number);
    } else if (typeof minAvailable === 'string') {
      minAvailable = IntOrString.fromString(options.minAvailable as string);
    }

    new KubePodDisruptionBudget(this, 'PDB', {
      metadata: {
        labels: options.labels ?? {},
      },
      spec: {
        selector: { matchLabels: options.selectorLabel },
        maxUnavailable: maxUnavailable,
        minAvailable: minAvailable,
      },
    });
  }
}

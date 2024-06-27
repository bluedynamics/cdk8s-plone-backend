// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import { IntOrString, KubePodDisruptionBudget, PodDisruptionBudgetSpec } from './imports/k8s';

export interface PlonePDBOptions {
  /**
   * maxUnavailable specification
   * @default - none
   */
  readonly maxUnavailable?: number | string;

  /**
   * minAvailable specification.
   * default only set if maxUnavailable is not set.
   * @default 1
   */
  readonly minAvailable?: number | string;

  /**
   * Extra labels to associate with resources.
   * @default - none
   */
  readonly labels?: { [name: string]: string };
}

export class PlonePDB extends Construct {

  constructor(scope: Construct, id: string, selectorLabel: { [name: string]: string }, options: PlonePDBOptions) {
    super(scope, id);

    var spec: PodDisruptionBudgetSpec = {};
    if (typeof options.maxUnavailable === 'number') {
      spec = {
        maxUnavailable: IntOrString.fromNumber(options.maxUnavailable as number),
      };
    } else if (typeof options.maxUnavailable === 'string') {
      spec = {
        maxUnavailable: IntOrString.fromString(options.maxUnavailable as string),
      };
    }
    if (typeof options.minAvailable === 'number') {
      spec = {
        ...spec,
        minAvailable: IntOrString.fromNumber(options.minAvailable as number),
      };
    } else if (typeof options.minAvailable === 'string') {
      spec = {
        ...spec,
        minAvailable: IntOrString.fromString(options.minAvailable as string),
      };
    }
    if (options.maxUnavailable === undefined && options.minAvailable === undefined) {
      spec = {
        minAvailable: IntOrString.fromNumber(1),
      };
    }

    spec = {
      ...spec,
      selector: { matchLabels: selectorLabel },
    };

    new KubePodDisruptionBudget(this, 'PDB', {
      metadata: {
        labels: options.labels ?? {},
      },
      spec: spec,
    });
  }
}

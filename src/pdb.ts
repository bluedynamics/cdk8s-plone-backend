import { Construct } from 'constructs';
import * as k8s from './imports/k8s';

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

    var spec: k8s.PodDisruptionBudgetSpec = {};
    if (typeof options.maxUnavailable === 'number') {
      spec = {
        maxUnavailable: k8s.IntOrString.fromNumber(options.maxUnavailable as number),
      };
    } else if (typeof options.maxUnavailable === 'string') {
      spec = {
        maxUnavailable: k8s.IntOrString.fromString(options.maxUnavailable as string),
      };
    }
    if (typeof options.minAvailable === 'number') {
      spec = {
        ...spec,
        minAvailable: k8s.IntOrString.fromNumber(options.minAvailable as number),
      };
    } else if (typeof options.minAvailable === 'string') {
      spec = {
        ...spec,
        minAvailable: k8s.IntOrString.fromString(options.minAvailable as string),
      };
    }
    if (options.maxUnavailable === undefined && options.minAvailable === undefined) {
      spec = {
        minAvailable: k8s.IntOrString.fromNumber(1),
      };
    }

    spec = {
      ...spec,
      selector: { matchLabels: selectorLabel },
    };

    new k8s.KubePodDisruptionBudget(this, 'PDB', {
      metadata: {
        labels: options.labels ?? {},
      },
      spec: spec,
    });
  }
}

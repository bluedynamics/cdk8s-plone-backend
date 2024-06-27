// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import { IntOrString, KubeServiceProps, KubeService } from './imports/k8s';

export interface PloneServiceOptions {

  /**
   * targetPort number.
   */
  readonly targetPort: number;

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

export class PloneService extends Construct {

  constructor(scope: Construct, id: string, options: PloneServiceOptions) {
    super(scope, id);

    const targetPort = IntOrString.fromNumber(options.targetPort);
    const selectorLabel = options.selectorLabel;

    const serviceOpts: KubeServiceProps = {
      metadata: {
        labels: options.labels ?? {},
      },
      spec: {
        type: 'ClusterIP',
        clusterIp: 'None',
        ports: [{ port: 80, targetPort: targetPort }],
        selector: selectorLabel,
      },
    };
    new KubeService(this, 'service', serviceOpts);
  }
}

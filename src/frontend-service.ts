// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import { IntOrString, KubeServiceProps, KubeService } from './imports/k8s';

export interface PloneFrontendServiceOptions {
  /**
   * Port number.
   * @default 3000
   */
  readonly port?: number;

  /**
   * Port number.
   * @default 3000;
   */
  readonly targetPort?: number;

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

export class PloneFrontendService extends Construct {

  constructor(scope: Construct, id: string, options: PloneFrontendServiceOptions) {
    super(scope, id);

    const port = options.port ?? 3000;
    const targetPort = IntOrString.fromNumber(options.targetPort ?? 3000);
    const selectorLabel = options.selectorLabel;

    const serviceOpts: KubeServiceProps = {
      metadata: {
        labels: options.labels ?? {},
      },
      spec: {
        type: 'ClusterIP',
        clusterIp: 'None',
        ports: [{ port: port, targetPort: targetPort }],
        selector: selectorLabel,
      },
    };
    new KubeService(this, 'service', serviceOpts);
  }
}

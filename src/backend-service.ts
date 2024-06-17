// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import { IntOrString, KubeServiceProps, KubeService } from './imports/k8s';

export interface PloneBackendServiceOptions {
  /**
   * Port number.
   * @default 8080
   */
  readonly port?: number;

  /**
   * Port number.
   * @default 8080;
   */
  readonly targetPort?: number;

  /**
   * Selector label.
   */
  readonly selector_label: { [name: string]: string };

  /**
   * Extra labels to associate with resources.
   * @default - none
   */
  readonly labels?: { [name: string]: string };
}

export class PloneBackendService extends Construct {

  constructor(scope: Construct, id: string, options: PloneBackendServiceOptions) {
    super(scope, id);

    const port = options.port ?? 8080;
    const targetPort = IntOrString.fromNumber(options.targetPort ?? 8080);
    const selector_label = options.selector_label;

    const serviceOpts: KubeServiceProps = {
      metadata: {
        labels: options.labels ?? {},
      },
      spec: {
        type: 'ClusterIP',
        clusterIp: 'None',
        ports: [{ port: port, targetPort: targetPort }],
        selector: selector_label,
      },
    };
    new KubeService(this, 'service', serviceOpts);
  }
}

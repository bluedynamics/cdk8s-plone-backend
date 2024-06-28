// eslint-disable-next-line import/no-extraneous-dependencies
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';

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

  public name: string;

  constructor(scope: Construct, id: string, options: PloneServiceOptions) {
    super(scope, id);

    const targetPort = k8s.IntOrString.fromNumber(options.targetPort);
    const selectorLabel = options.selectorLabel;

    const serviceOpts: k8s.KubeServiceProps = {
      metadata: {
        labels: options.labels ?? {},
      },
      spec: {
        ports: [{ port: options.targetPort, targetPort: targetPort, name: 'backend-http' }],
        selector: selectorLabel,
      },
    };
    const service = new k8s.KubeService(this, 'service', serviceOpts);
    this.name = service.name;
  }
}

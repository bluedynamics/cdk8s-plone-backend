import { Names } from 'cdk8s';
import * as kplus from 'cdk8s-plus-24';
import { Construct } from 'constructs';
import { PloneDeployment } from './deployment';
import { Probe, IntOrString } from './imports/k8s';
import { PloneService } from './service';

export interface PloneBaseOptions {
  readonly image?: string;
  readonly imagePullPolicy?: string;
  readonly replicas?: number;
  readonly maxUnavailable?: number | string;
  readonly minAvailable?: number | string;
  readonly limitCpu?: number;
  readonly limitMemory?: string;
  readonly environment?: kplus.Env;
}
export interface PloneOptions {
  readonly version?: string;
  readonly siteId?: string;
  readonly backend?: PloneBaseOptions;
  readonly frontend?: PloneBaseOptions;
  readonly imagePullSecrets?: string[];
}

export class Plone extends Construct {

  public readonly backendServiceName: string;
  public readonly frontendServiceName: string;

  constructor(scope: Construct, id: string, options: PloneOptions = {}) {
    super(scope, id);

    // ------------------------------------------------------------------------
    // General
    const siteId = options.siteId ?? 'Plone';

    // ------------------------------------------------------------------------
    // Backend
    const backend = options.backend ?? {};
    const backendPort = 8080;
    const backendLabels = {
      'app.kubernetes.io/name': 'plone-backend',
      'app.kubernetes.io/component': 'backend',
      'app.kubernetes.io/version': options.version ?? 'undefined',
    };

    // Probing
    const backendLivenessProbe: Probe = {
      httpGet: {
        path: '/',
        port: IntOrString.fromNumber(backendPort),
      },
      initialDelaySeconds: 30,
      timeoutSeconds: 1,
      periodSeconds: 10,
      successThreshold: 1,
      failureThreshold: 3,
    };
    const backendReadinessProbe: Probe = {
      httpGet: {
        path: '/',
        port: IntOrString.fromNumber(backendPort),
      },
      initialDelaySeconds: 10,
      timeoutSeconds: 15,
      periodSeconds: 10,
      successThreshold: 1,
      failureThreshold: 3,
    };

    // Deployment
    const backendDeployment = new PloneDeployment(this, 'backend', {
      labels: backendLabels,
      image: {
        image: backend.image ?? 'plone/plone-backend:latest',
        imagePullSecrets: options.imagePullSecrets ?? [],
        imagePullPolicy: backend.imagePullPolicy ?? 'IfNotPresent',
      },
      replicas: backend.replicas,
      limitCpu: backend.limitCpu ?? 1,
      limitMemory: backend.limitMemory ?? '512Mi',
      pdb: {
        maxUnavailable: backend.maxUnavailable ?? undefined,
        minAvailable: backend.minAvailable ?? undefined,
      },
      port: backendPort,
      environment: backend.environment,
      livenessProbe: backendLivenessProbe,
      readinessProbe: backendReadinessProbe,
    });

    // Service
    const backendService = new PloneService(backendDeployment, 'service', {
      labels: {
        'app.kubernetes.io/name': 'plone-backend-service',
        'app.kubernetes.io/component': 'service',
      },
      targetPort: backendPort,
      selectorLabel: { app: Names.toLabelValue(backendDeployment) },
    });
    this.backendServiceName = backendService.name;

    // ------------------------------------------------------------------------
    // Frontend
    const frontend = options.frontend ?? {};
    const frontendPort = 3000;
    const frontendLabels = {
      'app.kubernetes.io/name': 'plone-frontend',
      'app.kubernetes.io/component': 'frontend',
      'app.kubernetes.io/version': options.version ?? 'undefined',
    };

    // Probing
    const frontendLivenessProbe: Probe = {
      httpGet: {
        path: '/',
        port: IntOrString.fromNumber(frontendPort),
      },
      initialDelaySeconds: 30,
      timeoutSeconds: 1,
      periodSeconds: 10,
      successThreshold: 1,
      failureThreshold: 3,
    };
    const frontendReadinessProbe: Probe = {
      httpGet: {
        path: '/',
        port: IntOrString.fromNumber(frontendPort),
      },
      initialDelaySeconds: 10,
      timeoutSeconds: 15,
      periodSeconds: 10,
      successThreshold: 1,
      failureThreshold: 3,
    };

    // Environment for RAZZLE
    var frontendEnvironment = frontend.environment ?? new kplus.Env([], {});
    if (frontendEnvironment.variables.RAZZLE_INTERNAL_API_PATH === undefined) {
      // connect with backend service
      frontendEnvironment?.addVariable('RAZZLE_INTERNAL_API_PATH', kplus.EnvValue.fromValue(`http://${backendService.name}:${backendPort}/${siteId}`));
    }

    // Deployment
    const frontendDeployment = new PloneDeployment(this, 'frontend', {
      labels: frontendLabels,
      image: {
        image: frontend.image ?? 'plone/plone-frontend:latest',
        imagePullSecrets: options.imagePullSecrets ?? [],
        imagePullPolicy: frontend.imagePullPolicy ?? 'IfNotPresent',
      },
      replicas: frontend.replicas,
      limitCpu: frontend.limitCpu ?? 1,
      limitMemory: frontend.limitMemory ?? '1Gi',
      pdb: {
        maxUnavailable: frontend.maxUnavailable ?? undefined,
        minAvailable: frontend.minAvailable ?? undefined,
      },
      port: frontendPort,
      environment: frontendEnvironment,
      livenessProbe: frontendLivenessProbe,
      readinessProbe: frontendReadinessProbe,
    });

    // Service
    const frontendService = new PloneService(frontendDeployment, 'service', {
      labels: {
        'app.kubernetes.io/name': 'plone-frontend-service',
        'app.kubernetes.io/component': 'service',
      },
      targetPort: frontendPort,
      selectorLabel: { app: Names.toLabelValue(frontendDeployment) },
    });
    this.frontendServiceName = frontendService.name;
  }
}
import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Jens W. Klein',
  authorAddress: 'jk@kleinundpartner.at',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'cdk8s-plone',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:bluedynamics/cdk8s-plone.git',
  description: 'Provides a CMS Plone Backend and Frontend for Kubernetes with cdk8s',
  deps: [
    'cdk8s',
    'constructs@^10.3.0',
  ],
  peerDeps: [
    'constructs@^10.3.0',
  ],
  devDeps: [
    'constructs@^10.3.0',
    'yaml',
  ],
});
project.synth();
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
    'cdk8s-plus-24',
    'constructs',
  ],
  peerDeps: [
    'constructs@^10.3.0',
  ],
  devDeps: [
    'constructs@^10.3.0',
    'yaml',
  ],
  publishToPypi: {
    distName: 'cdk8s-plone',
    module: 'cdk8s_plone',
  },
});
project.synth();
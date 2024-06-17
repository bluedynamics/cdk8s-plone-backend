import { Cdk8sTeamJsiiProject } from '@cdk8s/projen-common';

const project = new Cdk8sTeamJsiiProject({
  authorEmail: 'jk@kleinundpartner.at',
  authorName: 'Jens Klein',
  authorOrganization: false,
  authorUrl: 'https://kleinundpartner.at',
  defaultReleaseBranch: 'main',
  name: 'cdk8s-plone',
  projenrcTs: true,
  keywords: [
    'cdk8s',
    'cms',
    'plone',
    'react',
  ],
  devDeps: [
    '@cdk8s/projen-common',
  ],
});
project.synth();
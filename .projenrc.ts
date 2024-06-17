import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Jens W. Klein',
  authorAddress: 'jk@kleinundpartner.at',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'cdk8s-plone',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:bluedynamics/cdk8s-plone.git',

  deps: [
    "cdk8s",
  ],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
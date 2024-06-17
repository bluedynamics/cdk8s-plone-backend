import { Cdk8sTeamJsiiProject } from '@cdk8s/projen-common';
const project = new Cdk8sTeamJsiiProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@cdk8s/projen-common'],
  name: 'cdk8s-plone',
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
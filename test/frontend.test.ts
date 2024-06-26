import { Chart, Testing } from 'cdk8s';
import { PloneFrontend, PloneFrontendOptions } from '../src/frontend';


test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PloneFrontend(chart, 'frontend');

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('defaults-with-pdp', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');
  const options: PloneFrontendOptions = {
    deployment: {
      pdbOptions: {
        minAvailable: 1,
      },
    },
  };

  // WHEN
  new PloneFrontend(chart, 'frontend_with_pdb', options);

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

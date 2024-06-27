import { Chart, Testing } from 'cdk8s';
import { PloneBackend, PloneBackendOptions } from '../src/backend';


test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PloneBackend(chart, 'backend');

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('defaults-with-pdp', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');
  const options: PloneBackendOptions = {
    deployment: {
      pdb: {
        minAvailable: 1,
      },
    },
  };

  // WHEN
  new PloneBackend(chart, 'backend_with_pdb', options);

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

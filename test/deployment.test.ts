import { Chart, Testing } from 'cdk8s';
import { PloneDeployment } from '../src/deployment';


test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PloneDeployment(chart, 'test', { port: 8080 });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('defaults-with-pdp', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PloneDeployment(chart, 'frontend_with_pdb', {
    port: 3000,
    pdb: { minAvailable: 1 },
  });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

import { Chart, Testing } from 'cdk8s';
import { Plone } from '../src/plone';


test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'app');

  // WHEN
  new Plone(chart, 'plone');

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('defaults-with-pdps', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'app');

  // WHEN
  new Plone(chart, 'plone_with_pdbs', {
    backendMaxUnavailable: 1,
    frontendMinAvailable: 2,
  });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

import { Chart, Testing } from 'cdk8s';
import { PloneBackend } from '../src/backend';


test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PloneBackend(chart, 'backend');

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

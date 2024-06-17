import { Chart, Testing } from 'cdk8s';
import { PloneBackend } from '../src/backend';


test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  new PloneBackend(chart, 'plone');

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

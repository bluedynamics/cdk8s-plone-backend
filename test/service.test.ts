import { Chart, Testing } from 'cdk8s';
import { PloneService } from '../src/service';


test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PloneService(chart, 'test', { port: 8080, targetPort: 8080, selectorLabel: { app: 'plone' } });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});


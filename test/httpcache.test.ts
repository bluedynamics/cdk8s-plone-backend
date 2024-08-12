import { Chart, Testing } from 'cdk8s';
import { PloneHttpcache } from '../src/httpcache';
import { Plone } from '../src/plone';

test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');
  const plone = new Plone(chart, 'plone');

  // WHEN
  new PloneHttpcache(chart, 'test', { plone: plone, varnishVcl: 'test' });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

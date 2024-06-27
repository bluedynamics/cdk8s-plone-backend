import { Chart, Testing } from 'cdk8s';
import { PlonePDB } from '../src/pdb';


test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PlonePDB(chart, 'pdb', { app: 'plone' }, {});

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('minAvailable', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PlonePDB(chart, 'pdb', { app: 'plone' }, { minAvailable: 2 });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('maxUnavailable', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PlonePDB(chart, 'pdb', { app: 'plone' }, { maxUnavailable: 2 });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('both', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'plone');

  // WHEN
  new PlonePDB(chart, 'pdb', { app: 'plone' }, { maxUnavailable: 4, minAvailable: 3 });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

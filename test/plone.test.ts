import { Chart, Testing } from 'cdk8s';
import { Plone, PloneOptions } from '../src/plone';


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
  const options: PloneOptions = {
    frontend: {
      deployment: {
        pdb: {
          minAvailable: 1,
        },
      },
    },
    backend: {
      deployment: {
        pdb: {
          minAvailable: 1,
        },
      },
    },
  };

  // WHEN
  new Plone(chart, 'plone_with_pdbs', options);

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

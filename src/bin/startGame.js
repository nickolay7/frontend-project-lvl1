#!/usr/bin/env node

import brainEven from './brain-even';
import brainCalc from './brain-calc';
import brainGcd from './brain-gcd';
import brainProgression from './brain-progression';

import actual from '../index';

console.log('Please select game : "brain-even: 1, brain-calc: 2, brain-gcd: 3, brain-progression: 4"');
const gameName = actual('Select;)');
switch (gameName) {
  case '1':
    brainEven();
    break;
  case '2':
    brainCalc();
    break;
  case '3':
    brainGcd();
    break;
  case '4':
    brainProgression();
    break;
  default:
    break;
}

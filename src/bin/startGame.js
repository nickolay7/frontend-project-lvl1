#!/usr/bin/env node

import brainEven from './brain-even';
import brainCalc from './brain-calc';
import brainGcd from './brain-gcd';

import actual from '../index';

console.log('Please select game : "brain-even: 1, brain-calc: 2, brain-gcd: 3"');
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
  default:
    break;
}

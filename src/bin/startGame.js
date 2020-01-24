#!/usr/bin/env node

import brainEven from '../games/brain-even';
import brainCalc from '../games/brain-calc';
import brainGcd from '../games/brain-gcd';
import brainProgression from '../games/brain-progression';
import brainPrime from '../games/brain-prime';
import { actual } from '../index';

console.log('Please select game : brain-even: 1, brain-calc: 2, brain-gcd: 3, brain-progression: 4, brain-prime: 5');
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
  case '5':
    brainPrime();
    break;
  default:
    break;
}

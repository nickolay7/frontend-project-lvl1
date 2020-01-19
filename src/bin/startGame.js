#!/usr/bin/env node

import { brainEven } from "./brain-even";
import { brainCalc } from "./brain-calc";

import actual from '../index';

console.log('Please select game : "brain-even, brain-calc, brain-gcd"');
const gameName = actual('Select;)');
switch (gameName) {
  case  'brain-even' :
    brainEven();
    break;
  case 'brain-calc' :
    brainCalc();
    break;
  case 'brain-gcd' :
    brainGcd();
    break;
  default :
    break;
}
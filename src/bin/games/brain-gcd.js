#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import begin from './brain-games';
import { engine, rand } from '../../index';

const generate = () => {
  let num1 = rand(1, 21);
  let num2 = rand(1, 21);
  const quest = `${num1} ${num2}`;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return cons(quest, String(num1));
};
export default () => {
  const userName = begin('Find the greatest common divisor of given numbers.');
  engine(userName, generate);
};
#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import { engine, rand } from '../index';

const isPrime = (x) => {
  if (x < 2) return false;

  for (let i = x - 1; i > 1; i -= 1) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
};

const generate = () => {
  const quest = rand(1, 101);
  const answer = isPrime(quest) ? 'yes' : 'no';
  return cons(quest, answer);
};
const cond = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  engine(cond, generate);
};

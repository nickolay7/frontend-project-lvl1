#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import { engine, rand, begin } from '../../index';

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

export default () => {
  const userName = begin('Answer "yes" if given number is prime. Otherwise answer "no".');
  engine(userName, generate);
};

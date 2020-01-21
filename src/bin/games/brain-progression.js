#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import { engine, rand } from '../../index';

const generate = () => {
  let start = rand(1, 10);
  const step = rand(1, 10);
  const unknown = rand(1, 11);
  let quest = `${start}`;
  let answer;
  for (let i = 1; i < 10; i += 1) {
    if (i === unknown) {
      start += step;
      quest += ' ..';
      answer = start;
    }
    start += step;
    quest += ` ${start}`;
  }
  return cons(quest, String(answer));
};
const cond = 'What number is missing in the progression?';

export default () => {
  engine(cond, generate);
};

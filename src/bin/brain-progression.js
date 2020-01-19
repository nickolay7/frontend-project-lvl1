#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import begin from './brain-games';
import { engine, rand } from '../index';

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
export default () => {
  const userName = begin('What number is missing in the progression?');
  engine(userName, generate);
};

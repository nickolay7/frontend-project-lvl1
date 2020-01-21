#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import begin from './brain-games';
import { engine, rand } from '../../index';

const generate = () => {
  const quest = rand(1, 101);
  const answer = quest % 2 === 0 ? 'yes' : 'no';
  return cons(quest, answer);
};

export default () => {
  const userName = begin('Answer "yes" if the number is even, otherwise answer "no".');
  engine(userName, generate);
};
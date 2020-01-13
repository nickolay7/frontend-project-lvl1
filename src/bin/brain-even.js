#!/usr/bin/env node

import begin from './brain-games';
import { engine, rand } from '../index';
import { cons } from '@hexlet/pairs';

const generate = () => {
  let quest = rand();
  let answer = quest % 2 === 0 ? 'yes' : 'no';
  return cons(quest, answer);
};
const userName = begin('Answer "yes" if the number is even, otherwise answer "no".');
engine(userName, generate);

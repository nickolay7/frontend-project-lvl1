#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import { engine, rand, begin } from '../../index';

const operate = () => {
  const set = ['+', '-', '*'];
  return set[Math.floor(Math.random() * 3)];
};
const generate = () => {
  const operand1 = rand(1, 21);
  const operand2 = rand(1, 21);
  const operator = operate();
  const quest = `${operand1} ${operator} ${operand2}`;
  let answer;
  switch (operator) {
    case '*':
      answer = operand1 * operand2;
      break;
    case '+':
      answer = +operand1 + +operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    default:
      break;
  }
  return cons(quest, String(answer));
};
export default () => {
  const userName = begin('What is the result of the expression?');
  engine(userName, generate);
};

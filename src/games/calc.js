import { cons } from '@hexlet/pairs';
import { engine } from '..';
import {
  getRandomNumber, min, max,
} from '../utils';

const operators = ['+', '-', '*'];
const getOperator = () => operators[getRandomNumber(0, operators.length - 1)];
const generateCalcGameData = () => {
  const operand1 = getRandomNumber(min, max);
  const operand2 = getRandomNumber(min, max);
  const operator = getOperator();
  const question = `${operand1} ${operator} ${operand2}`;
  let answer;
  switch (operator) {
    case '*':
      answer = operand1 * operand2;
      break;
    case '+':
      answer = operand1 + operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    default:
      break;
  }
  return cons(question, String(answer));
};
const conditions = 'What is the result of the expression?';

export default () => {
  engine(conditions, generateCalcGameData);
};

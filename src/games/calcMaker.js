import { cons } from '@hexlet/pairs';
import {
  engine, getRandomNumber, min, max,
} from '..';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, 3)];
};
const generateExpression = () => {
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
      answer = +operand1 + +operand2;
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
  engine(conditions, generateExpression);
};

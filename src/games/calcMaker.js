import { cons } from '@hexlet/pairs';
import {
  engine, getNumber, min, max,
} from '..';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getNumber(0, 3)];
};
const generateExpression = () => {
  const operand1 = getNumber(min, max);
  const operand2 = getNumber(min, max);
  const operator = getOperator();
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
const conditions = 'What is the result of the expression?';

export default () => {
  engine(conditions, generateExpression);
};

import { cons } from '@hexlet/pairs';
import { engine, getNumber, min, max } from '../index';

const getOperator = () => {
  const set = ['+', '-', '*'];
  return set[getNumber(0, 3)];
};
const generatePair = () => {
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
const cond = 'What is the result of the expression?';

export default () => {
  engine(cond, generatePair);
};

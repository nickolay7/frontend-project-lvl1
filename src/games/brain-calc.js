import { cons } from '@hexlet/pairs';
import { engine, getNumber, min, max } from '../index';

const operate = () => {
  const set = ['+', '-', '*'];
  return set[Math.floor(Math.random() * 3)];
};
const generate = () => {
  const operand1 = getNumber(min, max);
  const operand2 = getNumber(min, max);
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
const cond = 'What is the result of the expression?';

export default () => {
  engine(cond, generate);
};

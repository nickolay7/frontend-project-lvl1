import { cons } from '@hexlet/pairs';
import {
  engine, getNumber, max, min,
} from '..';

const generatePairOfNumbers = () => {
  let num1 = getNumber(min, max);
  let num2 = getNumber(min, max);
  const question = `${num1} ${num2}`;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return cons(question, String(num1));
};
const conditions = 'Find the greatest common divisor of given numbers.';

export default () => {
  engine(conditions, generatePairOfNumbers);
};

import { cons } from '@hexlet/pairs';
import {
  engine, getNumber, max, min,
} from '..';

const generatePair = () => {
  let num1 = getNumber(min, max);
  let num2 = getNumber(min, max);
  const quest = `${num1} ${num2}`;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return cons(quest, String(num1));
};
const cond = 'Find the greatest common divisor of given numbers.';

export default () => {
  engine(cond, generatePair);
};

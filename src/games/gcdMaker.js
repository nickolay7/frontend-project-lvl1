import { cons } from '@hexlet/pairs';
import { engine } from '..';
import {
  getRandomNumber, min, max,
} from '../utils';

const gcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return String(a);
};
const generateGcdGameData = () => {
  let num1 = getRandomNumber(min, max);
  let num2 = getRandomNumber(min, max);
  const question = `${num1} ${num2}`;
  return cons(question, gcd(num1, num2));
};
const conditions = 'Find the greatest common divisor of given numbers.';

export default () => {
  engine(conditions, generateGcdGameData);
};

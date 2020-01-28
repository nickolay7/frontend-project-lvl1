import { cons } from '@hexlet/pairs';
import { engine } from '..';
import {
  getRandomNumber, min, max,
} from '../utils';

const isPrime = (x) => {
  if (x < 2) return false;

  for (let i = 2; i <= x / 2; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
};

const generateNumber = () => {
  const question = getRandomNumber(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  engine(conditions, generateNumber);
};

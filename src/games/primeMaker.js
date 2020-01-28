import { cons } from '@hexlet/pairs';
import {
  engine, getNumber, min, max,
} from '..';

const isPrime = (x) => {
  if (x < 2) return false;

  for (let i = x - 1; i > 1; i -= 1) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
};

const generateNumber = () => {
  const question = getNumber(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  engine(conditions, generateNumber);
};

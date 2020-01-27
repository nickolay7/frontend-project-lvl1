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

const generatePair = () => {
  const quest = getNumber(min, max);
  const answer = isPrime(quest) ? 'yes' : 'no';
  return cons(quest, answer);
};

const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  engine(conditions, generatePair);
};

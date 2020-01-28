import { cons } from '@hexlet/pairs';
import {
  engine, getRandomNumber, max, min,
} from '..';

const generatePairOfNumbers = () => {
  const question = getRandomNumber(min, max);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};
const conditions = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  engine(conditions, generatePairOfNumbers);
};

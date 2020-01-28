import { cons } from '@hexlet/pairs';
import { engine } from '..';
import {
  getRandomNumber, min, max,
} from '../utils';

const generatePairOfNumbers = () => {
  const question = getRandomNumber(min, max);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};
const conditions = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  engine(conditions, generatePairOfNumbers);
};

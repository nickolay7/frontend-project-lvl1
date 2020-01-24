import { cons } from '@hexlet/pairs';
import {
  engine, getNumber, max, min,
} from '../index';

const generatePair = () => {
  const quest = getNumber(min, max);
  const answer = quest % 2 === 0 ? 'yes' : 'no';
  return cons(quest, answer);
};
const cond = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  engine(cond, generatePair);
};

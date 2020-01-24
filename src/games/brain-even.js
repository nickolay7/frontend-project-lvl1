import { cons } from '@hexlet/pairs';
import { engine, getNumber } from '../index';

const generate = () => {
  const quest = getNumber(1, 101);
  const answer = quest % 2 === 0 ? 'yes' : 'no';
  return cons(quest, answer);
};
const cond = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  engine(cond, generate);
};

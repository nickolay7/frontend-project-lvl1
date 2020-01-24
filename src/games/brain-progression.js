import { cons } from '@hexlet/pairs';
import { engine, getNumber } from '../index';

const generate = () => {
  let start = getNumber(1, 10);
  const step = getNumber(1, 10);
  const unknown = getNumber(1, 11);
  let quest = `${start}`;
  let answer;
  for (let i = 1; i < 10; i += 1) {
    if (i === unknown) {
      start += step;
      quest += ' ..';
      answer = start;
    }
    start += step;
    quest += ` ${start}`;
  }
  return cons(quest, String(answer));
};
const cond = 'What number is missing in the progression?';

export default () => {
  engine(cond, generate);
};

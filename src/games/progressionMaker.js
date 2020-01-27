import { cons } from '@hexlet/pairs';
import {
  engine, getNumber, max, min,
} from '..';

const generatePair = () => {
  let start = getNumber(min, max);
  const step = getNumber(min, max);
  const unknown = getNumber(min, max);
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
  engine(cond, generatePair);
};

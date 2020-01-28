import { cons } from '@hexlet/pairs';
import {
  engine, getNumber, max, min,
} from '..';

const generateProgression = () => {
  const start = getNumber(min, max);
  const diff = getNumber(min, max);
  const hiddenElement = getNumber(min, max);
  let quest = '';
  let answer;
  for (let i = 0; i < 10; i += 1) {
    const nextElement = start + diff * i;
    if (i === hiddenElement) {
      quest += ' ..';
      answer = nextElement;
    } else {
      quest += ` ${nextElement}`;
    }
  }
  return cons(quest, String(answer));
};
const conditions = 'What number is missing in the progression?';

export default () => {
  engine(conditions, generateProgression);
};

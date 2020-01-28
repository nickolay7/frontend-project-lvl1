import { cons } from '@hexlet/pairs';
import {
  engine, getNumber, max, min,
} from '..';

const generateProgression = () => {
  const start = getNumber(min, max);
  const diff = getNumber(min, max);
  const hiddenElement = getNumber(min, max);
  let question = '';
  let answer;
  for (let i = 0; i < 10; i += 1) {
    const nextElement = start + diff * i;
    if (i === hiddenElement) {
      question += ' ..';
      answer = nextElement;
    } else {
      question += ` ${nextElement}`;
    }
  }
  return cons(question, String(answer));
};
const conditions = 'What number is missing in the progression?';

export default () => {
  engine(conditions, generateProgression);
};

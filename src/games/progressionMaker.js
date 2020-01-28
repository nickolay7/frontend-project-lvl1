import { cons } from '@hexlet/pairs';
import {
  engine, getNumber, max, min,
} from '..';

const generateProgression = () => {
  const start = getNumber(min, max);
  const diff = getNumber(min, max);
  const hiddenElement = getNumber(min, max);
  const progressionLength = 10;
  let question = '';
  let answer;
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = start + diff * i;
    if (i === hiddenElement) {
      question = `${question} ..`;
      answer = nextElement;
    } else {
      question = `${question} ${nextElement}`;
    }
  }
  return cons(question, String(answer));
};
const conditions = 'What number is missing in the progression?';

export default () => {
  engine(conditions, generateProgression);
};

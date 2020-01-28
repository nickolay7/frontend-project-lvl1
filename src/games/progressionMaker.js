import { cons } from '@hexlet/pairs';
import {
  engine, getRandomNumber, max, min,
} from '..';

const generateProgression = () => {
  const start = getRandomNumber(min, max);
  const diff = getRandomNumber(min, max);
  const hiddenElement = getRandomNumber(min, max);
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

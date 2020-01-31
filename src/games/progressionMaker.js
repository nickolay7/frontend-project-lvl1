import { cons } from '@hexlet/pairs';
import { engine } from '..';
import {
  getRandomNumber, min, max,
} from '../utils';

const progressionLength = 10;
const generateProgressionGameData = () => {
  const start = getRandomNumber(min, max);
  const diff = getRandomNumber(min, max);
  const hiddenElement = start + diff * getRandomNumber(min, max);
  const answer = hiddenElement;
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = start + diff * i;
    if (nextElement === hiddenElement) {
      question = `${question} ..`;
    } else {
      question = `${question} ${nextElement}`;
    }
  }
  return cons(question, String(answer));
};
const conditions = 'What number is missing in the progression?';

export default () => {
  engine(conditions, generateProgressionGameData);
};

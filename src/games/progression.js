import { cons } from '@hexlet/pairs';
import { engine } from '..';
import {
  getRandomNumber, min, max,
} from '../utils';

const progressionLength = 10;
const generateProgressionGameData = () => {
  const start = getRandomNumber(min, max);
  const diff = getRandomNumber(min, max);
  const question = [];
  const hiddenElement = start + diff * getRandomNumber(question.length, progressionLength - 1);
  const answer = hiddenElement;
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = start + diff * i;
    if (nextElement === hiddenElement) {
      question.push('..');
    } else {
      question.push(nextElement);
    }
  }
  return cons(question.join(' '), String(answer));
};
const conditions = 'What number is missing in the progression?';

export default () => {
  engine(conditions, generateProgressionGameData);
};

import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { roundsNumber } from './utils';

export const actual = (query) => readlineSync.question(query);
export const engine = (condition, func) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  console.log('');
  const userName = actual('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  for (let i = 1; i <= roundsNumber; i += 1) {
    const getData = func();
    const question = car(getData);
    const answer = cdr(getData);
    console.log(`Question: ${question}`);
    const userAnswer = actual('You answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

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
    const pair = func();
    const question = car(pair);
    const answer = cdr(pair);
    console.log(`Question: ${question}`);
    const userAnswer = actual('You answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return 1;
};

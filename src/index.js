import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const actual = (query) => readlineSync.question(query);
export const getNumber = (min, max) => Math.floor(min + Math.random() * (max - min));
export const min = 1;
export const max = 10;
export const engine = (cond, func) => {
  console.log('Welcome to the Brain Games!');
  console.log(cond);
  console.log('');
  const userName = actual('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  let pair = func();
  for (let i = 1; i !== 4; i += 1) {
    const quest = car(pair);
    const answer = cdr(pair);
    console.log(`Question: ${quest}`);
    const userAnswer = actual('You answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!`);
    }
    pair = func();
  }
  return console.log(`Congratulations, ${userName}!`);
};

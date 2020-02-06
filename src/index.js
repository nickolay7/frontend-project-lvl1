import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const askUser = (query) => readlineSync.question(query);
export const engine = (condition, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  console.log('');
  const userName = askUser('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const data = getData();
    const question = car(data);
    const answer = cdr(data);
    console.log(`Question: ${question}`);
    const userAnswer = askUser('You answer: ');
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

import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { brainEven } from './bin/brain-even';
//import { brainCalc } from './bin/brain-calc';

const actual = (query) => readlineSync.question(query);
export const rand = () => Math.floor(Math.random() ** 2 * 100);
export const engine = (user, func) => {
  let pair = func();
  for (let i = 1; i !== 4; i += 1) {
    const quest = car(pair);
    const answer = cdr(pair);
    console.log(`Question: ${quest}`);
    const userAnswer = actual('You answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${user}!`);
    }
    pair = func();
  }
  return console.log(`Congratulations, ${user}!`);
};

// console.log('Please select game : "brain-even, brain-calc, brain-gcd"');
// const gameName = actual('Select;)');
// switch (gameName) {
//   case  'brain-even' :
//     brainEven();
//     break;
//   case 'brain-calc' :
//     brainCalc();
//     break;
//   case 'brain-gcd' :
//     brainGcd();
//     break;
//   default :
//     break;
// }

export default actual;

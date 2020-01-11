import readlineSync from 'readline-sync';

const actual = (query) => readlineSync.question(query);
const rand = () => Math.floor(Math.random() ** 2 * 100);
export const even = (user, i = 1) => {
  if (i === 4) {
    return console.log(`Congratulations, ${user}!`);
  }
  const num = rand();
  const flag = num % 2 === 0 ? 1 : 0;
  const noYes = flag === 0 ? 'yes' : 'no';
  const yesNo = flag === 0 ? 'no' : 'yes';
  console.log(`Question: ${num}`);
  const answer = actual('Your answer: ');
  if ((flag && answer === 'yes') || (!flag && answer === 'no')) {
    console.log('Correct!');
  } else {
    return console.log(`${noYes} is wrong answer ;(. Correct answer was ${yesNo}. Let's try again, ${user}!`);
  }
  return even(user, i + 1);
};

export default actual;

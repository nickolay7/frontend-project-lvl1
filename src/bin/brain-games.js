#!/usr/bin/env node

import userName from '../index';

const begin = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('');
  const user = userName('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log('');
};
begin();

export default begin;

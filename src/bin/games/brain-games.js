#!/usr/bin/env node

import userName from '../../index';

const begin = (instruct) => {
  console.log('Welcome to the Brain Games!');
  console.log(instruct);
  console.log('');
  const user = userName('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log('');
  return user;
};

export default begin;

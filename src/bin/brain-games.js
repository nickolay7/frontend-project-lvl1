#!/usr/bin/env node

import userName from '../index';

export default () => {
    console.log('Welcome to the Brain Games!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log('');
    const user = userName();
    console.log(`Hello, ${user}!`);
    console.log('');
};

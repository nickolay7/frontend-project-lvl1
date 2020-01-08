#!/usr/bin/env node

import userName from '../index';

console.log('Welcome to the Brain Games!');
const user = userName();
console.log(`Hello, ${user}!`);

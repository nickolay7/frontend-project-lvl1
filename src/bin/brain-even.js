#!/usr/bin/env node

import begin from './brain-games';
import { even } from '../index';

const userName = begin('Answer "yes" if the number is even, otherwise answer "no".');
even(userName);

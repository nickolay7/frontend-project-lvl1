#!/usr/bin/env node

import begin from './brain-games';
import { even } from '../index';

const userName = begin();
even(userName);

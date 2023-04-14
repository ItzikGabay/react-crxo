#! /usr/bin/env node

import inquirer from 'inquirer';
import { generateSteps } from './lib/inquirer/steps.js';
import { startInquirer } from './lib/inquirer/process.js';
import {
  inputArgumnets,
  modesConfig,
  modesRefrence,
} from './lib/common/modes.js';

const init = async () => {
  const [mode] = inputArgumnets;

  const output = await (modesRefrence[mode].input() ||
    modesConfig.interactive.input());

  console.log('output: ', output);
};

init();

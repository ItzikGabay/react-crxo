#! /usr/bin/env node

import {
  inputArgumnets,
  modesConfig,
  modesRefrence,
} from './lib/common/modes.js';
import { processOutput } from './lib/processor/processor.js';

const init = async () => {
  const [mode] = inputArgumnets;

  const output = await (modesRefrence[mode]?.input() ||
    modesConfig.interactive.input());

  processOutput(output, modesRefrence[mode], {});
};

init();

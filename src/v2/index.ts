#! /usr/bin/env node

import {
  inputArgumnets,
  modesConfig, modesReference,
} from './lib/common/modes.js';
import { processOutput } from './lib/processor/processor.js';
import {ModeConfig} from "./lib/common/types";
import {InquirerOutput} from "./lib/inquirer/types";

(async () => {
  const [mode] = inputArgumnets;

  // in case there is no mode, use the default mode
  const currentMode: ModeConfig = modesReference[mode] || modesConfig.interactive;

  // first getting the engine type, then the rest of the input
  const userOutput = await currentMode.input() as InquirerOutput;

  // processing the output by generated object
  await processOutput(userOutput);
})();

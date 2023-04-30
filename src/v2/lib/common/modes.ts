import { getUserFilesSpecifications } from '../inquirer/process.js';
import {AvailableModes, ModesConfig} from "./types";

export const inputArgumnets = process.argv.slice(2);

const availableModes: AvailableModes = {
    silent: '-s',
    interactive: '-i',
    test: '-t',
}

export const modesConfig: ModesConfig = {
  silent: {
    name: 'silent',
    description: 'Silent mode',
    command: availableModes.silent,
    openToUsers: true,
    input: getUserFilesSpecifications,
  },
  interactive: {
    name: 'interactive',
    description: 'Interactive mode',
    command: availableModes.interactive,
    openToUsers: true,
    input: getUserFilesSpecifications,
  },
  test: {
    name: 'test',
    description: 'Test mode',
    command: availableModes.test,
    openToUsers: false,
    input: getUserFilesSpecifications,
  },
};

// In order to match the input argument with the mode,
// we need to have a reference to the modes.
export const modesReference = {
  [availableModes.silent]: modesConfig.silent,
  [availableModes.interactive]: modesConfig.interactive,
  [availableModes.test]: modesConfig.test,
};


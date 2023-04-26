import { getUserFilesSpecifications } from '../inquirer/process.js';

export const inputArgumnets = process.argv.slice(2);

const availableModes = {
  silent: '-s',
  interactive: '-i',
  test: '-t',
};

export const modesConfig = {
  silent: {
    name: 'silent',
    description: 'Silent mode',
    command: availableModes.silent,
    openToUsers: true,
    input: () => {
      console.log('Silent mode');
      return true;
    },
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
    input: () => {
      console.log('Test mode');
      return true;
    },
  },
};

// In order to match the input argument with the mode,
// we need to have a reference to the modes.
export const modesRefrence = {
  [availableModes.silent]: modesConfig.silent,
  [availableModes.interactive]: modesConfig.interactive,
  [availableModes.test]: modesConfig.test,
};

import { modesConfig } from './modes.js';

export const consoleAppUsage = (exitApp: boolean = true): void => {
  console.log('Wrong usage. Please make sure you provided mode correctly.');
  Object.values(modesConfig).forEach(mode => {
    if (mode.openToUsers) {
      console.log(`\t${mode.command} ${mode.name} \t ${mode.description}`);
    }
  });

  console.log("\n\te.g: 'npx crxo -i'");

  if (exitApp) {
    process.exit(1);
  }
};

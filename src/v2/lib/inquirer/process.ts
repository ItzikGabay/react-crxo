import inquirer from 'inquirer';
import { generateSteps } from './steps.js';

export const startInquirer = async () => {
  const steps = generateSteps();
  return inquirer.prompt(steps);
};

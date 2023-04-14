import inquirer from 'inquirer';
import { generateInquirerSteps } from './steps.js';

export const startInquirer = async () => {
  const steps = generateInquirerSteps();
  return inquirer.prompt(steps);
};

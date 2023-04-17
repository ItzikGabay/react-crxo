import inquirer from 'inquirer';
import {
  engineTypeStep,
  generateInquirerSteps,
  inquirerSteps,
} from './steps.js';

export const startInquirer = async () => {
  const engineType = await getEngineType();
  const steps = generateInquirerSteps(inquirerSteps, { engineType });
  const userOutput = await inquirer.prompt(steps);

  return { engineType, ...userOutput };
};

export const getEngineType = async () => {
  const steps = generateInquirerSteps(engineTypeStep);
  return inquirer.prompt(steps);
};

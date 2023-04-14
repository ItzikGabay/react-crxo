import inquirer from 'inquirer';
import {
  engineTypeStep,
  generateInquirerSteps,
  inquirerSteps,
} from './steps.js';

export const startInquirer = async (engineType: any) => {
  const steps = generateInquirerSteps(inquirerSteps, engineType);
  return inquirer.prompt(steps);
};

export const getEngineType = async () => {
  const steps = generateInquirerSteps(engineTypeStep);
  return inquirer.prompt(steps);
};

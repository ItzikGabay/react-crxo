import inquirer from 'inquirer';
import {
  engineTypeStep,
  generateInquirerSteps,
  inquirerSteps,
} from './steps.js';

export const getUserFilesSpecifications = async () => {
  const { templateEngine } = await getEngineType();
  const stepsJSON = generateInquirerSteps(inquirerSteps, { templateEngine });
  const userOutput = await inquirer.prompt(stepsJSON);

  return { templateEngine, ...userOutput };
};

export const getEngineType = async () => {
  const steps = generateInquirerSteps(engineTypeStep);
  return inquirer.prompt(steps);
};

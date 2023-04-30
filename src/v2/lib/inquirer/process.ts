import inquirer, {Answers, PromptModule} from 'inquirer';
import {
  engineTypeStep,
  generateInquirerSteps,
  inquirerSteps,
} from './steps.js';
import {InquirerOutput} from "./types";

export const getUserFilesSpecifications = async (): Promise<Answers> => {
  const { templateEngine } = await getEngineType();
  const stepsJSON = generateInquirerSteps(inquirerSteps, { templateEngine });
  const userOutput: Answers = await inquirer.prompt(stepsJSON);

  return { templateEngine, ...userOutput };
};

export const getEngineType = async () => {
  const steps = generateInquirerSteps(engineTypeStep);
  return inquirer.prompt(steps);
};

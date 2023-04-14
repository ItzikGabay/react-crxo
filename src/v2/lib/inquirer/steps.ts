import { JsEngineStep } from './steps-lib/js-engine-step.js';

const inquirerSteps = {
  STEP_1: JsEngineStep,
  STEP_2: JsEngineStep,
};

export const generateInquirerSteps = () => {
  const steps: any = [];

  // dynamically generate steps from `inquirerSteps` object
  Object.values(inquirerSteps).forEach((step: any) => steps.push(step()));

  return steps;
};

import { JsEngineStep } from './steps-lib/js-engine-step.js';
import { fileSelectionStep } from './steps-lib/files-selection.js';
import { componentNameStep } from './steps-lib/component-name.js';
import { templateTypeStep } from './steps-lib/template-type.js';
import { nameConventionStep } from './steps-lib/name-convention.js';

export const engineTypeStep = {
  STEP_1: JsEngineStep,
};

export const inquirerSteps = {
  STEP_1: componentNameStep,
  STEP_2: fileSelectionStep,
  STEP_3: templateTypeStep,
  STEP_4: nameConventionStep,
};

export const generateInquirerSteps = (inquirerSteps: any, props: any = {}) => {
  const steps: any = [];

  // dynamically generate steps from `inquirerSteps` object
  Object.values(inquirerSteps).forEach((step: any) => steps.push(step(props)));

  return steps;
};

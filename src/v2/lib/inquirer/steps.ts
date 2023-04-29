import { JsEngineStep } from './steps-lib/js-engine-step.js';
import { fileSelectionStep } from './steps-lib/files-selection.js';
import { componentNameStep } from './steps-lib/component-name.js';
import { templateTypeStep } from './steps-lib/template-type.js';
import { createLocationStep } from "./steps-lib/create-location.js";

export const engineTypeStep = {
  STEP_1: JsEngineStep,
};

export const inquirerSteps = {
  STEP_1: componentNameStep,
  STEP_2: fileSelectionStep,
  STEP_3: templateTypeStep,
  STEP_4: createLocationStep,
  // STEP_5: nameConventionStep - disabled for now
};

export const generateInquirerSteps = (stepsObj: any, props: any = {}) => {
  const steps: any = [];

  // dynamically generate steps from `inquirerSteps` object
  Object.values(stepsObj).forEach((step: any) => steps.push(step(props)));

  return steps;
};

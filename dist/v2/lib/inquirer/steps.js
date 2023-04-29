import { JsEngineStep } from './steps-lib/js-engine-step.js';
import { fileSelectionStep } from './steps-lib/files-selection.js';
import { componentNameStep } from './steps-lib/component-name.js';
import { templateTypeStep } from './steps-lib/template-type.js';
import { createLocationStep } from "./steps-lib/create-location.js";
export var engineTypeStep = {
    STEP_1: JsEngineStep,
};
export var inquirerSteps = {
    STEP_1: componentNameStep,
    STEP_2: fileSelectionStep,
    STEP_3: templateTypeStep,
    STEP_4: createLocationStep,
    // STEP_5: nameConventionStep - disabled for now
};
export var generateInquirerSteps = function (stepsObj, props) {
    if (props === void 0) { props = {}; }
    var steps = [];
    // dynamically generate steps from `inquirerSteps` object
    Object.values(stepsObj).forEach(function (step) { return steps.push(step(props)); });
    return steps;
};

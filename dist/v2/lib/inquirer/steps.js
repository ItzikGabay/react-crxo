import { JsEngineStep } from './steps-lib/js-engine-step.js';
import { fileSelectionStep } from './steps-lib/files-selection.js';
import { componentNameStep } from './steps-lib/component-name.js';
import { templateTypeStep } from './steps-lib/template-type.js';
import { nameConventionStep } from './steps-lib/name-convention.js';
export var engineTypeStep = {
    STEP_1: JsEngineStep,
};
export var inquirerSteps = {
    STEP_1: componentNameStep,
    STEP_2: fileSelectionStep,
    STEP_3: templateTypeStep,
    STEP_4: nameConventionStep,
};
export var generateInquirerSteps = function (inquirerSteps, props) {
    if (props === void 0) { props = {}; }
    var steps = [];
    // dynamically generate steps from `inquirerSteps` object
    Object.values(inquirerSteps).forEach(function (step) { return steps.push(step(props)); });
    return steps;
};
//# sourceMappingURL=steps.js.map
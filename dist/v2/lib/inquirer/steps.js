import { JsEngineStep } from './steps-lib/js-engine-step.js';
var inquirerSteps = {
    STEP_1: JsEngineStep,
    STEP_2: JsEngineStep,
};
export var generateInquirerSteps = function () {
    var steps = [];
    // dynamically generate steps from `inquirerSteps` object
    Object.values(inquirerSteps).forEach(function (step) { return steps.push(step()); });
    return steps;
};
//# sourceMappingURL=steps.js.map
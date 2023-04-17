import inquirer from 'inquirer'
import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt'
import { InquirerStepPartialConfig } from '../types';
import { basename } from 'path';

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)

function isFolderHidden(pathStr: any) {
    const filename = basename(pathStr);
    return filename.startsWith('.');
}

const createLocationStepConfig: any = {
    name: 'stepTemplate',
    message: 'This is a step template',
    type: 'file-tree-selection',
    onlyShowDir: true,
    enableGoUpperDirectory: true,
    onlyShowValid: true,
    validate: (input: any) => {
        return !isFolderHidden(input);
    }
};

export const createLocationStep = (): InquirerStepPartialConfig => {
    return {
        ...createLocationStepConfig,
    };
};
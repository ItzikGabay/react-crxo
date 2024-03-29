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
    name: 'outputDirectory',
    message: 'This is a step template',
    type: 'file-tree-selection',
    onlyShowDir: true,
    enableGoUpperDirectory: false,
    onlyShowValid: true,
    validate: (input: string) => {
        return !isFolderHidden(input);
    }
};

export const createLocationStep = (): InquirerStepPartialConfig => {
    return {
        ...createLocationStepConfig,
    };
};
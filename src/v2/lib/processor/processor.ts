import { FilesService } from './fs.js';
import { createTemplate } from './templating.js';
import { InquirerFileType, InquirerOutput } from '../inquirer/types';

export const processOutput = async (output: InquirerOutput) => {
  for (const file of output.filesTypes) {
    try {
      await processFile(file, output);
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  return true;
};

const processFile = async (file: InquirerFileType, config: InquirerOutput) => {
  const filesService = new FilesService(file, config);
  const templateByExtensionType = createTemplate(file, config);

  await filesService.createExtensionFile(templateByExtensionType);
};

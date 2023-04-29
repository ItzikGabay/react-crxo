import {FilesService} from "./fs.js";
import {createTemplate} from "./templating.js";

export const processOutput = async (output: any, modeRef: any, options: any) => {
  // console.debug('[debug] ->', { output, modeRef, options });

  for (const file of output.filesTypes) {
      await processFile(file, output);
  }

  return true;
};

const processFile = async (file: any, config: any) => {
    const filesService = new FilesService(file, config);
    const stringTemplate = createTemplate(file, config);

    await filesService.createExtensionFile(stringTemplate);
}
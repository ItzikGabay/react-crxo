import {createDirectory} from "./fs.js";
import {availableExtensions, getExtensionsConfig} from "./files.js";

export const processOutput = async (output: any, modeRef: any, options: any) => {
  console.debug('[debug] ->', { output, modeRef, options });

  for (const file of output.filesTypes) {
      await processFile(file, output);
  }

  return true;
};

const processFile = async (file: any, config: any) => {
    switch (file.type) {
        case availableExtensions.folder:
            await createDirectory(`${config.outputDirectory}/${config.componentName}`);
            break;
        case availableExtensions.react:
            console.debug('SOON - react', { file });
            break;
        default:
            console.debug('SOON - default', { file });
            break;
    }
}
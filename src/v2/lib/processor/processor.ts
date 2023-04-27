import {FilesService} from "./fs.js";
import {availableExtensions} from "./files.js";

export const processOutput = async (output: any, modeRef: any, options: any) => {
  // console.debug('[debug] ->', { output, modeRef, options });

  for (const file of output.filesTypes) {
      await processFile(file, output);
  }

  return true;
};

const processFile = async (file: any, config: any) => {
    const filesService = new FilesService(file, config);

    // cases for putting content in files, all the rest handled dynamically
    switch (file.type) {
        case availableExtensions.folder:
            await filesService.createDirectory()
            break;
        case availableExtensions.react:
            await filesService.createExtensionFile()
            break;
        default:
            await filesService.createExtensionFile()
            break;
    }
}
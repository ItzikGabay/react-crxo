#! /usr/bin/env node

import utils, { validateComponentName, warnUser } from "./utils/index.js";
import getComponentConfiguration from "./inquirer.js";
import config from "./utils/config.js";
import errors from "./utils/errors.js";

const init = () => {
  const mode = process.argv[2];
  const isSilentMode = mode === "create" || mode === "-c";
  const isInteractiveMode = mode === "interactive" || mode === "-i" || !mode;

  if (isSilentMode) {
    const [name, path, ...processArguments] = process.argv.slice(3);

    if (!processArguments) {
      return warnUser(errors.NO_ARGUMENTS);
    }

    if (!validateComponentName(name)) {
      return warnUser(errors.INVALID_USAGE);
    }

    const fileListToCreate = config.DEFAULT_SELECTED_FILES;

    processArguments.includes("--js") && fileListToCreate.push("JS");
    processArguments.includes("--index") && fileListToCreate.push("INDEX");
    processArguments.includes("--small") && fileListToCreate.push("small");

    return utils.createFiles(name, path, fileListToCreate);
  }

  if (isInteractiveMode) {
    getComponentConfiguration()
      .then(({ userInputComponentName, filesCreationSelect }) => {
        utils.createFiles(userInputComponentName, "", filesCreationSelect);
      })
      .catch((error) => {
        if (error.isTtyError) {
          return warnUser(errors.ENVIRONMENT_NOT_SUPPORTED);
        }
        return warnUser(errors.SOMETHING_WENT_WRONG);
      });
    return;
  }

  return warnUser(errors.INVALID_USAGE);
};

init();

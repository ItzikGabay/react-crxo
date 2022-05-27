#! /usr/bin/env node

import utils from "./utils/index.js";
import getComponentConfiguration from "./inquirer.js";

const init = () => {
  // eslint-disable-next-line no-undef
  const mode = process.argv[2];

  if (mode === "create" || mode === "-c") {
    // eslint-disable-next-line no-undef
    const [, , , name, path, ...processArguments] = process.argv;
    const isInteractiveMode = mode === "--interactive" || mode === "--i";
    const outputFilesList = ["Folder", "JSX", "CSS"];

    if (processArguments && !isInteractiveMode) {
      if (mode !== "-c" && mode !== "create") {
        return console.log(
          "ERROR: invalid usage. please use crxo -c <path> <name> <options>"
        );
      }

      if (name.includes("#")) {
        // Add regex instead
        return console.log(
          "ERROR: invalid usage. you cannot use speical characters in the name"
        );
      }

      processArguments.includes("--js") && outputFilesList.push("JS");
      processArguments.includes("--index") && outputFilesList.push("INDEX");
      processArguments.includes("--small") && outputFilesList.push("small");

      return utils.createFiles(name, path, outputFilesList);
    }
  }

  getComponentConfiguration()
    .then(({ userInputComponentName, filesCreationSelect }) => {
      utils.createFiles(userInputComponentName, "", filesCreationSelect);
    })
    .catch((error) => {
      if (error.isTtyError) {
        return console.log(
          "Sorry, couldn't be rendered in the current environment"
        );
      }
      return console.log("Something went wrong. please try again.");
    });
};

init();

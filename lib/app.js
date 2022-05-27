#! /usr/bin/env node

import fs from "fs";
import utils from "./utils/index.js";
import getComponentConfiguration from "./inquirer.js";
import { shortJsx, shortCss } from "../react-library/short.js";

/**
 * Must TODO:
 * Add the option to use the interacrive mode by inserting --interactive,
 * otherwise the user will be prompted to insert the component name.
 * e.g: react-library --interactive or
 * react-library ./ example-component --js --index --large
 */
const init = () => {
  // eslint-disable-next-line no-undef
  const mode = process.argv[2];

  if (mode === "create" || mode === "-c") {
    // eslint-disable-next-line no-undef
    const [, , , name, path, ...processArguments] = process.argv;
    const isInteractiveMode = mode === "--interactive" || mode === "--i";
    const {
      file_path,
      folder_path,
      index_path,
      uppercased,
      underscored,
      original,
    } = utils.extractData(name, path);

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

      console.log({
        file_path,
        folder_path,
        index_path,
        uppercased,
        underscored,
        original,
      });

      // crxo -c ./example-component --js --index --large
      // 1. Loop on each argument
      // 2. Make sure there is valid synatx without =,"", and show error if not valid.
      return;
    }
  }

  getComponentConfiguration()
    .then(({ userInputComponentName, filesCreationSelect }) => {
      /**
       * Getting user inputs trough "userInputs"
       * and generating the full path for all of the files.
       *
       * TODO later: to do a dynamic function that return the
       * full path with the extension wanted.
       * createPathWithExtension(fileName, extension)
       *
       * TODO later: file for the functions.
       * e.g changeFirstLetterUppercase(word)
       * e.g checkIfValuesExist(array)
       */

      const { file_path, folder_path, index_path, uppercased, underscored } =
        utils.extractData(userInputComponentName);

      if (filesCreationSelect.includes("Folder")) {
        fs.mkdirSync(folder_path);
      }
      if (filesCreationSelect.includes("JSX")) {
        const JSX_path = `${file_path}.jsx`;
        fs.writeFileSync(JSX_path, shortJsx(underscored, uppercased));
      }
      if (filesCreationSelect.includes("CSS")) {
        const CSS_path = `${file_path}.module.css`;
        fs.writeFileSync(CSS_path, shortCss(underscored));
      }
      if (filesCreationSelect.includes("JS")) {
        const JS_path = `${file_path}.js`;
        fs.writeFileSync(JS_path, "");
      }
      if (filesCreationSelect.includes("index")) {
        const index_full_path = `${index_path}.js`;
        fs.writeFileSync(index_full_path, "");
      }
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

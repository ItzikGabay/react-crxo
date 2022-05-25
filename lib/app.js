#! /usr/bin/env node

import path from "path";
import fs from "fs";
import getComponentConfiguration from "./inquirer.js";
import { shortJsx, shortCss } from "../react-library/short.js";
import utils from "./utils/index.js";

const init = () => {
  getComponentConfiguration()
    .then((userInputs) => {
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

      // result: "example"
      const { fullComponentName } = userInputs;

      const { file_path, folder_path, index_path, uppercased } =
        utils.extractData(fullComponentName);

      const jsx = `${file_path}.jsx`;
      const js = `${file_path}.js`;
      const index = `${index_path}.js`;
      const css = `${file_path}.module.css`;

      /**
       * Creating the files after we have component configuration data.
       * We validating each value to check if it is exist in the array
       * inside the configuration data, and if not, we will not create it.
       */
      if (userInputs.createFilesList.includes("Folder")) {
        fs.mkdirSync(folder_path);
      }
      if (userInputs.createFilesList.includes("JSX")) {
        fs.writeFileSync(jsx, shortJsx(fullComponentName, uppercased));
      }
      if (userInputs.createFilesList.includes("CSS")) {
        fs.writeFileSync(css, shortCss(fullComponentName));
      }
      if (userInputs.createFilesList.includes("JS")) {
        fs.writeFileSync(js, "");
      }
      if (userInputs.createFilesList.includes("index")) {
        fs.writeFileSync(index, "");
      }
      console.log("---------- Done! Enjoy.");
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Sorry, couldn't be rendered in the current environment");
      } else {
        console.log("Something went wrong. please try again.");
      }
    });
};

init();

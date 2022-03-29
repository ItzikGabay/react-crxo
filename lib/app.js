#! /usr/bin/env node

import path from "path";
import fs from "fs";
import getComponentConfiguration from "./inquirer.js";
import { shortJsx, shortCss } from "../react-library/short.js";

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
      const componentName = userInputs.fullComponentName;
      // result: "Example"
      const componentNameUppercased =
        componentName.charAt(0).toUpperCase() + componentName.slice(1);

      // result: "user/local/desktop/project/component-name"
      const fullFolderPath = path.resolve(componentName);
      // result: "user/local/desktop/project/component-name/component-name"
      const fullFilePath = path.resolve(`${componentName}/${componentName}`);
      const indexFullPath = path.resolve(`${componentName}/index`);
      // "user/local/desktop/project/component-name/Component-name"
      const fullFilePathUppercased = path.resolve(
        `${componentName}/${componentNameUppercased}`
      );

      // result: "user/local/desktop/project/component-name/Component-name.jsx"
      const jsx = `${fullFilePath}.jsx`;
      const js = `${fullFilePath}.js`;
      const index = `${indexFullPath}.js`;
      // result: "user/local/desktop/project/component-name/Component-name.module.css"
      const css = `${fullFilePath}.module.css`;

      /**
       * Creating the files after we have component configuration data.
       * We validating each value to check if it is exist in the array
       * inside the configuration data, and if not, we will not create it.
       */
      if (userInputs.createFilesList.includes("Folder")) {
        fs.mkdirSync(fullFolderPath);
      }
      if (userInputs.createFilesList.includes("JSX")) {
        fs.writeFileSync(jsx, shortJsx(componentName, componentNameUppercased));
      }
      if (userInputs.createFilesList.includes("CSS")) {
        fs.writeFileSync(css, shortCss(componentName));
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

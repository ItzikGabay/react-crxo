#! /usr/bin/env node

import path from "path";
import fs from "fs";
import getComponentConfiguration from "./inquirer.js";
import { shortJsx, shortCss } from "../react-library/short.js";

const init = () => {
  getComponentConfiguration()
    .then((userInputs) => {
      // "example"
      const componentName = userInputs.fullComponentName;
      // "Example"
      const componentNameUppercased =
        componentName.charAt(0).toUpperCase() + componentName.slice(1);

      // "user/local/desktop/project/component-name"
      const fullFolderPath = path.resolve(componentName);
      // "user/local/desktop/project/component-name/component-name"
      const fullFilePath = path.resolve(`${componentName}/${componentName}`);
      const indexFullPath = path.resolve(`${componentName}/index`);
      // "user/local/desktop/project/component-name/Component-name"
      const fullFilePathUppercased = path.resolve(
        `${componentName}/${componentNameUppercased}`
      );

      // "user/local/desktop/project/component-name/Component-name.jsx"
      const jsx = `${fullFilePathUppercased}.jsx`;
      const js = `${fullFilePath}.js`;
      const index = `${indexFullPath}.js`;
      // "user/local/desktop/project/component-name/Component-name.module.css"
      const css = `${fullFilePath}.module.css`;

      /**
       * Files creating process.
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

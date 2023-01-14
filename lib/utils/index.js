import path from "path";
import { shortJsx, shortCss } from "../../react-library/short.js";
import fs from "fs";

export const convertColorNameToColor = (colorName) => {
  const colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };

  if (!colors[colorName]) {
    return colors.red;
  }

  return colors[colorName];
};

export const consoleUser = (color, output) => {
  color = convertColorNameToColor(color);

  console.log(`${color}${output}\x1b[0m`);
};

export const warnUser = (message) => {
  consoleUser("red", message);
};

export const validateComponentName = (name) => {
  if (!name) {
    warnUser("Please provide a component name.");
    return false;
  }

  const regex = /^[-_.a-z0-9]+$/;

  if (!regex.test(name)) {
    warnUser("Please provide a valid component name.");
    return false;
  }

  return true;
};

function upperFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function uppercasedString(str) {
  const words = str.split("-");
  return words.map((word) => upperFirstLetter(word)).join("");
}

function underscoredString(str) {
  const words = str.split("-");
  return words.map((word) => word).join("_");
}

function _cleanPath(_path) {
  if (_path === "./" || _path === ".") {
    _path = "";
  }

  if (_path[0] === "/") {
    _path = _path.slice(1);
  }

  if (_path.includes("./")) {
    _path = _path.replace(/^\.\//, "") + "/";
  } else {
    _path += "/";
  }
  return _path;
}

function extractData(componentName, userInputPath = "") {
  const original = componentName;
  userInputPath = _cleanPath(userInputPath);
  let folder_path = `${path.resolve(original)}/${userInputPath}`;
  const uppercased = uppercasedString(original);
  const underscored = underscoredString(original);

  if (folder_path[folder_path.length - 1] === "/" && userInputPath.length < 3) {
    folder_path = folder_path.slice(0, -1);
  }

  if (userInputPath.length > 3) {
    folder_path = `${path.resolve()}/${userInputPath}${original}/`;
  }

  return {
    file_path: `${folder_path}${original}`,
    index_path: `${folder_path}index`,
    folder_path,
    original,
    uppercased,
    underscored,
  };
}

function createFiles(name, filesPath, filesToCreate) {
  const {
    file_path,
    folder_path,
    index_path,
    uppercased,
    underscored,
    original,
  } = utils.extractData(name, filesPath);

  if (filesToCreate.includes("Folder")) {
    fs.mkdirSync(folder_path);
  }
  if (filesToCreate.includes("JSX")) {
    const JSX_path = `${file_path}.jsx`;
    fs.writeFileSync(JSX_path, shortJsx(underscored, uppercased));
  }
  if (filesToCreate.includes("CSS")) {
    const CSS_path = `${file_path}.module.css`;
    fs.writeFileSync(CSS_path, shortCss(underscored));
  }
  if (filesToCreate.includes("JS")) {
    const JS_path = `${file_path}.js`;
    fs.writeFileSync(JS_path, "");
  }
  if (filesToCreate.includes("index")) {
    const index_full_path = `${index_path}.js`;
    fs.writeFileSync(index_full_path, "");
  }

  console.log(`Component "${original}" created at ${folder_path}.`);
}

const utils = {
  upperFirstLetter,
  uppercasedString,
  extractData,
  createFiles,
};

export default utils;

import path from "path";
import { shortJsx, shortCss } from "../../react-library/short";
import fs from "fs";

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

function extractData(componentName, userInputPath = "") {
  if (userInputPath === "./" || userInputPath === ".") {
    userInputPath = "";
  }

  if (userInputPath[0] === "/") {
    userInputPath = userInputPath.slice(1);
  }

  if (userInputPath.includes("./")) {
    userInputPath = userInputPath.replace(/^\.\//, "") + "/";
  } else {
    userInputPath += "/";
  }

  const original = componentName;
  let folder_path = `${path.resolve(original)}/${userInputPath}`;
  const uppercased = uppercasedString(original);
  const underscored = underscoredString(original);

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

  console.log("Component created", {
    file_path,
    folder_path,
    index_path,
    uppercased,
    underscored,
    original,
  });
}

const utils = {
  upperFirstLetter,
  uppercasedString,
  extractData,
  createFiles,
};

export default utils;

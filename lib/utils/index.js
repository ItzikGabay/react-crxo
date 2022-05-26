import path from "path";

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
  const original = componentName;
  const folder_path = `${path.resolve(original)}/${userInputPath}`;
  const uppercased = uppercasedString(original);
  const underscored = underscoredString(original);

  return {
    file_path: `${folder_path}/${original}`,
    index_path: `${folder_path}/index`,
    folder_path,
    original,
    uppercased,
    underscored,
  };
}

const utils = {
  upperFirstLetter,
  uppercasedString,
  extractData,
};

export default utils;

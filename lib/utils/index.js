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

function extractData(componentName) {
  const original = componentName;
  const uppercased = uppercasedString(original);
  const underscored = underscoredString(original);

  return {
    folder_path: path.resolve(original),
    file_path: path.resolve(`${original}/${original}`),
    index_path: path.resolve(`${original}/${original}/index`),
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

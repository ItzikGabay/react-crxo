function upperFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function uppercasedString(str) {
  const words = str.split("-");
  return words.map((word) => upperFirstLetter(word)).join("");
}

const utils = {
  upperFirstLetter,
  uppercasedString,
};

export default utils;

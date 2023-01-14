export const convertColorNameToColor = colorName => {
  const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
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

export const successLog = output => {
  consoleUser('green', output);
};

export const warnUser = message => {
  consoleUser('red', message);
};

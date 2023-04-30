export function upperFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function uppercasedString(str) {
  const words = str.split('-');
  return words.map(word => upperFirstLetter(word)).join('');
}

export function underscoredString(str) {
  const words = str.split('-');
  return words.filter(word => word).join('_');
}

export function cleanPath(_path) {
  if (_path === './' || _path === '.') {
    _path = '';
  }

  if (_path[0] === '/') {
    _path = _path.slice(1);
  }

  if (_path.includes('./')) {
    _path = _path.replace(/^\.\//, '') + '/';
  } else {
    _path += '/';
  }
  return _path;
}

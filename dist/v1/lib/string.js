export function upperFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function uppercasedString(str) {
    var words = str.split('-');
    return words.map(function (word) { return upperFirstLetter(word); }).join('');
}
export function underscoredString(str) {
    var words = str.split('-');
    return words.filter(function (word) { return word; }).join('_');
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
    }
    else {
        _path += '/';
    }
    return _path;
}
//# sourceMappingURL=string.js.map
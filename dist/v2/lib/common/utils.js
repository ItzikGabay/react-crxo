export var injectValueIntoMultipleKeys = function (items, key, validateKeyValues, value) {
    return items.forEach(function (item) {
        validateKeyValues.includes(item[key]) && Object.assign(item, value);
    });
};

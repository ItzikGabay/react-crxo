export const injectValueIntoMultipleKeys = (items: any, key: any, validateKeyValues: any, value: any) => {
    return items.forEach((item: any) => {
        validateKeyValues.includes(item[key]) && Object.assign(item, value);
    });
}
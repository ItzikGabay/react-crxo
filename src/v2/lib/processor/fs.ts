import * as fs from "fs";

export const createDirectory = (path: string) => {
    return fs.promises.mkdir(path);
}
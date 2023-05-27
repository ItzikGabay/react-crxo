import * as fs from 'fs';
import {InquirerFileType, InquirerOutput} from "../inquirer/types";

export class FilesService {
  private config: InquirerOutput;
  private file: InquirerFileType;
  constructor(file: InquirerFileType, config: InquirerOutput) {
    this.file = file;
    this.config = config;
  }

  public createDirectory(folderName: boolean | string) {
    if(folderName) {
        return fs.promises.mkdir(`${this.getPath}/${folderName}`);
    }
    return fs.promises.mkdir(this.getPath);
  }

  public createExtensionFile(content: string = '') {
    console.log(`Generating ${this.file.extension}..`);
    if(this.file.type === 'folder') {
        const isSubFolder = this.file.type === 'folder' && this.file.extension !== 'folder';
        return this.createDirectory(isSubFolder && this.file.extension);
    }
    return fs.promises.writeFile(this.getFullPath, content, 'utf8');
  }

  private get isFolderOptionSelected() {
    return this.config.filesTypes.some((fileType: InquirerFileType) => fileType.type === 'folder');
  }

  private get getPath() {
    // in case they want to create files locally
    if(!this.isFolderOptionSelected) {
        return this.config.outputDirectory;
    }

    return `${this.config.outputDirectory}/${this.config.componentName}`;
  }

  private get getComponentName() {
    // mostly for index files
    if (!this.file.hasComponentName) {
      return this.file.extension;
    }

    return this.config.componentName;
  }

  private get getExtension() {
    // for folders, css, scss, etc
    if (!this.file.endingWithEngineType) {
      return this.file.extension;
    }

    // mostly for index files
    if (!this.file.hasComponentName) {
      return this.config.templateEngine;
    }

    return `${this.file.extension}.${this.config.templateEngine}`;
  }

  private get getFullPath() {
    return `${this.getPath}/${this.getComponentName}.${this.getExtension}`;
  }
}

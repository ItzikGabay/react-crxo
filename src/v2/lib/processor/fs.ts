import * as fs from 'fs';

export class FilesService {
  private config: any;
  private file: any;
  constructor(file: any, config: any) {
    this.file = file;
    this.config = config;
  }

  public createDirectory() {
    return fs.promises.mkdir(this.getPath);
  }

  public createExtensionFile(content: string = '') {
    console.log(`Generating ${this.file.extension}..`);
    return fs.promises.writeFile(this.getFullPath, content);
  }

  private get isFolderOptionSelected() {
    return this.config.filesTypes.some((fileType: any) => fileType.type === 'folder');
  }

  private get getPath() {
    // in case they want to create files locally
    if(!this.isFolderOptionSelected) {
        return this.config.outputDirectory;
    }

    return `${this.config.outputDirectory}/${this.getComponentName}`;
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

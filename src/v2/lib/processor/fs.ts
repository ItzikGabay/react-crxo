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

  public createExtensionFile(content: string = null) {
    console.log(`Generating ${this.file.extension} file into ${this.getFullPath}`);
    return fs.promises.writeFile(this.getFullPath, content);
  }

  private get getPath() {
    return this.config.outputDirectory;
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

import { availableExtensions } from './files.js';
import {InquirerFileType, InquirerOutput} from "../inquirer/types";

const availableTemplateTypes = {
    lite: 'lite',
    regular: 'regular',
    extended: 'extended',
}

class ReactTemplating {
  name: string;
  config: InquirerOutput;
  constructor(config: InquirerOutput) {
    this.name = config.componentName;
    this.config = config;
  }

  private convertToPascalCase(name: string): string {
    // we're splitting by '' to get each letter as a separate item in the array
    // then we capitalize the first letter of each item
    // then we join the array back to a string
    return name
      .split('-')
      .map(
        splittedName => splittedName[0].toUpperCase() + splittedName.slice(1),
      )
      .join('');
  }

  private get getComponentName(): string {
    return this.convertToPascalCase(this.name);
  }

  private get hasCSSModule(): boolean {
    return this.config.filesTypes.some(
      (file: InquirerFileType) => file.type === availableExtensions.cssModule,
    );
  }

  private get hasSCSSModule(): boolean {
    return this.config.filesTypes.some(
      (file: InquirerFileType) => file.type === availableExtensions.scssModule,
    );
  }

  private get hasCSS(): boolean {
    return this.config.filesTypes.some(
      (file: InquirerFileType) => file.type === availableExtensions.css,
    );
  }

  private get getCSSEngineExtension(): string | boolean {
    if (this.hasSCSSModule) {
      return 'module.scss';
    }
    if (this.hasCSS) {
      return 'css';
    }
    if (this.hasCSSModule) {
      return 'module.css';
    }

    return false;
  }

  private get getDivClassName(): string {
    if(!this.getCSSEngineExtension) {
      return '';
    }

    return this.hasCSS ? "className='container'" : 'className={styles.container}';
  }

  private addReactComponentImports() {
    return (
      "import React from 'react';\n" +
      (this.getCSSEngineExtension
        ? `import ${this.hasCSS ? '' : 'styles from '}'./${this.name}.${this.getCSSEngineExtension}';\n` : '')
    );
  }

  private addReactComponentState(templateType: string) {
    return templateType !== availableTemplateTypes.lite ? `const [state, setState] = useState();\n\n` : '';
  }

  private addReactComponentBody() {
    return (
      `const ${this.getComponentName} = () => {\n` +
      this.addReactComponentState(this.config.templateType) +
      '   return (\n' +
      `      <div${this.getDivClassName}>\n` +
      '          <h1>${this.name}</h1>\n' +
      '      </div>\n' +
      '     );\n' +
      '};\n'
    );
  }

  private addReactExport() {
    return `export default ${this.getComponentName};`;
  }

  public createReactComponent() {
    return (
      this.addReactComponentImports() +
      '\n' +
      this.addReactComponentBody() +
      '\n' +
      this.addReactExport()
    );
  }
}

class CSSTemplating {
  private addCSS() {
    return (
      '.container {\n' +
      '   font-size: 40px;\n' +
      '   color: red;\n' +
      '}\n'
    );
  }

  public createCSS() {
    return this.addCSS();
  }
}

class IndexTemplating {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  private addIndexImports() {
    return `export ${this.name} from './${this.name}';\n`;
  }

  public createIndex() {
    return this.addIndexImports();
  }
}

export const createTemplate = (file: InquirerFileType, config: InquirerOutput) => {
  const reactComponent = new ReactTemplating(config);
  const css = new CSSTemplating();

  switch (file.type) {
    case availableExtensions.react:
      return reactComponent.createReactComponent();
    case availableExtensions.css:
      return css.createCSS();
    case availableExtensions.cssModule:
      return css.createCSS();
    case availableExtensions.scssModule:
      return css.createCSS();
    default:
      return '';
  }
};

import {InquirerFileType, InquirerOutput} from "../../../inquirer/types";
import {availableExtensions} from "../../files.js";

const availableTemplateTypes = {
    lite: 'lite',
    regular: 'regular',
    extended: 'extended',
}

export class ReactTemplating {
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

    public get getComponentName(): string {
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
            `import React${this.config.templateType !== availableTemplateTypes.lite ?', { useState }' : ''} from 'react';\n` +
            (this.getCSSEngineExtension
                ? `import ${this.hasCSS ? '' : 'styles from '}'./${this.name}.${this.getCSSEngineExtension}';\n` : '')
        );
    }

    private addReactComponentState() {
        return this.config.templateType !== availableTemplateTypes.lite ? `const [state, setState] = useState(null);\n\n` : '';
    }

    private addReactComponentBody() {
        return (
            `export const ${this.getComponentName} = () => {\n` +
            this.addReactComponentState() +
            '   return (\n' +
            `      <div ${this.getDivClassName}>\n` +
            `          <h1>${this.getComponentName}</h1>\n` +
            '      </div>\n' +
            '     );\n' +
            '};\n'
        );
    }

    public createReactComponent() {
        return (
            this.addReactComponentImports() +
            '\n' +
            this.addReactComponentBody()
        );
    }
}
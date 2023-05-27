export class IndexTemplating {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    private addIndexImports() {
        return `export { ${this.name} } from './${this.name}';\n`;
    }

    public createIndex() {
        return this.addIndexImports();
    }
}
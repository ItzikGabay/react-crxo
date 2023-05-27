export class CSSTemplating {
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
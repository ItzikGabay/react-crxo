import { availableExtensions } from './files.js';
import { InquirerFileType, InquirerOutput } from "../inquirer/types";
import { IndexTemplating } from "./file-types/index-templating/index-templating.js";
import { CSSTemplating } from "./file-types/css-templating/css-templating.js";
import { ReactTemplating } from "./file-types/react-templating/react-templating.js";

export const createTemplate = (file: InquirerFileType, config: InquirerOutput) => {
  const reactComponent = new ReactTemplating(config);
  const css = new CSSTemplating();
  const index = new IndexTemplating(reactComponent.getComponentName);

  switch (file.type) {
    case availableExtensions.react:
      return reactComponent.createReactComponent();
    case availableExtensions.css:
      return css.createCSS();
    case availableExtensions.cssModule:
      return css.createCSS();
    case availableExtensions.scssModule:
      return css.createCSS();
    case availableExtensions.index:
      return index.createIndex();
    default:
      return '';
  }
};

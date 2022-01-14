import inquirer from "inquirer";

const main = () => {
  return inquirer.prompt([
    {
      name: "fullComponentName",
      message: "What is the component name (e.g exampleComponent) 💼 :",
      validate: (input) => {
        return /^[a-zA-Z0-9\-]*$/.test(input);
      },
    },
    {
      type: "checkbox",
      name: "createFilesList",
      message: "Which files to create?",
      choices: [
        { name: "Folder", checked: true },
        { name: "index", checked: false },
        { name: "JS", checked: false },
        { name: "JSX", checked: true },
        { name: "CSS", checked: true },
      ],
    },
    {
      type: "list",
      name: "componentSize",
      message: "Which file do you want to create?",
      choices: [
        "Lite - Simple react imports",
        { name: "Basic - useState, HTML Tags, more - Soon", disabled: true },
        {
          name: "Large - Medium package + useEffect, classes, more - SOON",
          disabled: true,
        },
      ],
    },
  ]);
};

export default main;

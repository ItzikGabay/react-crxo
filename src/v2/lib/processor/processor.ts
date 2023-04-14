export const processOutput = (output: any, modeRef: any, options: any) => {
  const { templateEngine } = output;
  console.debug('[debug] ->', { output, modeRef, options });
  return true;
};

import language from './language.js';
import { warnUser } from './logs.js';

export const validateInputValue = input => {
  return /^[a-zA-Z0-9-]*$/.test(input) && input.length > 1;
};

export const validateComponentName = name => {
  if (!name) {
    warnUser(language.NO_CMP_NAME_ERR);
    return false;
  }

  const regex = /^[-_.a-z0-9]+$/;

  if (!regex.test(name)) {
    warnUser(language.PROVIDE_VALID_NAME_ERR);
    return false;
  }

  return true;
};

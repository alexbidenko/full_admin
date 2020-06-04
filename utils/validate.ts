import { FormErrors } from 'redux-form';
// eslint-disable-next-line import/named
import { CommandType } from '../types/types';

const validate = (values: CommandType): FormErrors<CommandType> => {
  const errors: FormErrors<CommandType> = {};

  if (!values.command) {
    errors.command = 'Set a command';
  }

  if (!values.server) {
    errors.server = 'Select server';
  }

  return errors;
};
export default validate;

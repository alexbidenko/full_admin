import { TextField } from '@material-ui/core';
import React from 'react';

const InputField: React.FC = (field: any) => {
  const { type, meta, label, input, ...custom } = field;

  return (
    <TextField
      type={type || 'text'}
      error={meta.touched && meta.invalid}
      label={label}
      {...input}
      {...custom}
      helperText={meta.touched && meta.error}
    />
  );
};

// @ts-ignore
export default InputField;
// @ts-ignore

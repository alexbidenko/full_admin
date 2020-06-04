import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
} from '@material-ui/core';
import React from 'react';

const SelectField: React.FC = (field: any) => {
  const { type, meta, label, input, children, fullWidth, ...custom } = field;

  return (
    <FormControl error={meta.touched && meta.invalid} fullWidth={fullWidth}>
      <InputLabel id={`label-${label}`}>{label}</InputLabel>
      <Select
        type={type || 'text'}
        {...input}
        {...custom}
        labelId={`label-${label}`}
      >
        {children}
      </Select>
      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
};

export default SelectField;

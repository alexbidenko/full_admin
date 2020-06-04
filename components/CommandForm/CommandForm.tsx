import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, Grid, MenuItem } from '@material-ui/core';
import { ServerType } from '../../types/types';
import validate from '../../utils/validate';
import InputField from '../FormInputs/InputField/InputField';
import SelectField from '../FormInputs/SelectField/SelectField';

type PropsType = {
  list: ServerType[];
};

const CommandForm: React.FC<PropsType & InjectedFormProps<{}, PropsType>> = (
  props: any
) => {
  const { list, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            name="server"
            component={SelectField}
            normalize={(v: string) => +v}
            label="Целевой сервер"
            fullWidth
          >
            <MenuItem value={0}>Не выбрано</MenuItem>
            {list.map((server: ServerType) => (
              <MenuItem key={server.id} value={server.id}>
                {server.name}
              </MenuItem>
            ))}
          </Field>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="command"
            component={InputField}
            multiline
            label="Отправляемая команда"
            fullWidth
          />
        </Grid>
      </Grid>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

const form = reduxForm<{}, PropsType>({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  form: 'command',
  validate,
})(CommandForm);

export default connect(null)(form);

import React, { useEffect, useState } from 'react';
import { InjectedFormProps } from 'redux-form';
import Router from 'next/router';
import { Box, Container } from '@material-ui/core';
import { ServerType } from '../../../types/types';
import API from '../../../utils/API';
import store from '../../../store/servers';
import { ServerActions } from '../../../types/enums';
import CommandForm from '../../../components/CommandForm/CommandForm';
import Layout from '../../../components/Layout/Layout';

const ServerCommand: React.FC<InjectedFormProps> = () => {
  const [list, setList] = useState<ServerType[]>([]);

  useEffect(() => {
    if (store.getState().servers.length) {
      setList(store.getState().servers);
    } else {
      API.get('server/list').then((response) => {
        setList(response.data);
        store.dispatch({ type: ServerActions.SET_LIST, payload: response.data });
      });
    }
  }, []);

  const onSubmit = (v: any) => {
    API.post('server/command', v).then((response) => {
      console.log(response);
      Router.push('/');
    });
  };

  return (
    <Layout>
      <Container>
        <Box fontSize="h3.fontSize">Send Command</Box>
        <CommandForm list={list} onSubmit={onSubmit} />
      </Container>
    </Layout>
  );
};

export default ServerCommand;

import React, { useEffect, useState } from 'react';
import { ServerType } from '../../../types/types';
import ServerItem from '../../../components/ServerItem/ServerItem';
import API from '../../../utils/API';
import store from '../../../store/servers';
import { ServerActions } from '../../../types/enums';
import Layout from '../../../components/Layout/Layout';

export default function ServerList() {
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

  return (
    <Layout>
      ServerList
      {list.map((server) => (
        <ServerItem key={server.id} {...server} />
      ))}
    </Layout>
  );
}

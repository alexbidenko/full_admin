import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import React, { useState } from 'react';
import store from '../../store/servers';
import { KeysActions } from '../../types/enums';

const KeysList: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const addKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      store.dispatch({
        type: KeysActions.ADD_KEY,
        payload: { value, key: value },
      });
      setValue('');
    }
  };

  return (
    <>
      <TextField
        type="text"
        label="Поиск ключа"
        onKeyUp={addKey}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        {store.getState().keys.map((item) => (
          <ListItem
            button
            key={item.key}
            onClick={() => {
              store.dispatch({
                type: KeysActions.DELETE_KEY,
                payload: { key: item.key },
              });
            }}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.value} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default KeysList;

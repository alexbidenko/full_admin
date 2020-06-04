import { combineReducers, createStore } from 'redux';
import { KeysActions, ServerActions } from '../types/enums';

const servers = (state = [], action: { type: ServerActions; payload: [] }) => {
  switch (action.type) {
    case ServerActions.SET_LIST:
      return action.payload;
    default:
      return state;
  }
};

const keys = (
  state: { value: any; key: string }[] = [],
  action: { type: string | number; payload: { value?: any; key: string } }
) => {
  switch (action.type) {
    case KeysActions.ADD_KEY:
      return [...state, action.payload];
    case KeysActions.DELETE_KEY:
      return state.filter((el) => el.key !== action.payload.key);
    default:
      return state;
  }
};

const reducer = combineReducers({ servers, keys });
const store = createStore(reducer);

export default store;

import { List } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = new List();

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ITEM:
      return state.concat(action.text);

    case types.DELETE_ITEM:
      return state.delete(action.id);

    case types.EDIT_ITEM:
      return state.set(action.id, action.text);

    default:
      return state;
  }
}

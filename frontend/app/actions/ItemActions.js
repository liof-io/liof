import * as types from '../constants/ActionTypes';

export function createItem(text) {
  return {
    type: types.CREATE_ITEM,
    text
  };
}

export function editItem(id, text) {
  return {
    type: types.EDIT_ITEM,
    id,
    text
  };
}

export function deleteItem(id) {
  return {
    type: types.DELETE_ITEM,
    id
  };
}

export function completeItem(id) {
  return {
    type: types.COMPLETE_ITEM,
    id
  };
}

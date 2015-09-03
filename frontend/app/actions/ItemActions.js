import request from 'axios';
import * as types from '../constants/ActionTypes';

const API_URL = 'https://localhost:3000/lists';

export function receiveItems() {
  return {
    type: types.RECEIVE_ITEMS,
    promise: request.get(API_URL)
  }
}

export function createItem(text) {
  return {
    type: types.CREATE_ITEM,
    promise: request.post(API_URL, { text })
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

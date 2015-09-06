import request from 'axios';

export const RECEIVE_ITEMS  = 'RECEIVE_ITEMS';
export const REQUEST_ITEMS  = 'REQUEST_ITEMS';
export const CREATE_ITEM    = 'CREATE_ITEM';
export const EDIT_ITEM      = 'EDIT_ITEM';
export const DELETE_ITEM    = 'DELETE_ITEM';
export const COMPLETE_ITEM  = 'COMPLETE_ITEM';

const API_URL = 'https://localhost:3000/lists';

export function receiveItems() {
  return {
    type: RECEIVE_ITEMS,
    promise: request.get(API_URL)
  }
}

export function createItem(text) {
  return {
    type: CREATE_ITEM,
    promise: request.post(API_URL, { text })
  };
}

export function editItem(id, text) {
  return {
    type: EDIT_ITEM,
    id,
    text
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  };
}

export function completeItem(id) {
  return {
    type: COMPLETE_ITEM,
    id
  };
}

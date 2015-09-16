import fetch from 'isomorphic-fetch';

export const REQUEST_ITEMS  = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS  = 'RECEIVE_ITEMS';
export const CREATE_ITEM    = 'CREATE_ITEM';
export const EDIT_ITEM      = 'EDIT_ITEM';
export const DELETE_ITEM    = 'DELETE_ITEM';
export const COMPLETE_ITEM  = 'COMPLETE_ITEM';

const API_URL = 'http://localhost:3000/lists.json';

export function createItem(text) {
  return {
    type: CREATE_ITEM,
    text
  }
}

function requestItems() {
  return {
    type: REQUEST_ITEMS
  }
}

function receiveItems(json) {
  return {
    type: RECEIVE_ITEMS,
    items: json
  }
}

export function fetchItems() {
  return dispatch => {
    dispatch(requestItems());
    return fetch(API_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveItems(json)));
  }
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

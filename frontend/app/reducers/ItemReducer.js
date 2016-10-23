import { CREATE_ITEM, RECEIVE_ITEMS, REQUEST_ITEMS, EDIT_ITEM, DELETE_ITEM } from '../actions/ItemActions';

const initialState = { items: [], isFetching: false };

export default function itemReducer(state = initialState, action) {
  switch (action.type) {

    case CREATE_ITEM:
      return Object.assign({}, state, {
        items: [...state.items, action.text]
      });

    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
      // return {
      //   ...state,
      //   isFetching: false,
      //   items: action.items
      // });

    // case CREATE_ITEM:
    //   return state.concat(action.text);

    // case EDIT_ITEM:
    //   return state.set(action.id, action.text);

    // case DELETE_ITEM:
    //   return state.delete(action.id);

    default:
      return state;
  }
}

import { List } from 'immutable';
import { CREATE_ITEM, EDIT_ITEM, DELETE_ITEM} from '../actions/ItemActions';

const initialState = new List();

export default function itemReducer(state = initialState, action) {
  switch (action.type) {

    case CREATE_ITEM:
      return state.concat(action.text);

    case EDIT_ITEM:
      return state.set(action.id, action.text);

    case DELETE_ITEM:
      return state.delete(action.id);

    default:
      return state;
  }
}

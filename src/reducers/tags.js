import { FETCH_MOST_SEARCH_TAG_SUCCESS } from '../actions/action-type';

let intialState = {
  historyTags: [],
  mostSearchedTags: [],
};
export default function (state = intialState, action) {
  switch (action.type) {
    case FETCH_MOST_SEARCH_TAG_SUCCESS:
      return {
        ...state,
        mostSearchedTags: action.tags,
      };

    default:
      return {
        ...state,
      };
  }
}

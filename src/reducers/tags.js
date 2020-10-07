import {
  FETCH_MOST_SEARCH_TAG_SUCCESS,
  UPDATE_HISTORY_TAG,
} from '../actions/action-type';
let history = localStorage.getItem('history');
console.log('history', history);
if (history === null) {
  history = [];
} else {
  history = JSON.parse(history);
}
let intialState = {
  historyTags: history,
  mostSearchedTags: [],
};
export default function (state = intialState, action) {
  switch (action.type) {
    case FETCH_MOST_SEARCH_TAG_SUCCESS:
      return {
        ...state,
        mostSearchedTags: action.tags,
      };
    case UPDATE_HISTORY_TAG:
      let tempHistory = JSON.parse(localStorage.getItem('history'));
      if (tempHistory === null) {
        tempHistory = [];
      }
      return {
        ...state,
        historyTags: tempHistory,
      };

    default:
      return {
        ...state,
      };
  }
}

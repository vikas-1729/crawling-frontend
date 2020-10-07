import {
  SEARCH_AGAIN_BLOG,
  SEARCH_FAILURE,
  SEARCH_START,
  SEARCH_SUCCESS,
} from '../actions/action-type';

let initialState = {
  error: null,
  result: {
    blogsArray: [],
    releatedTags: [],
  },
  inProgress: false,
  tagName: '',
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        inProgress: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        inProgress: false,
        result: {
          ...state.result,
          blogsArray: action.blogsArray,
          releatedTags: action.releatedTags,
        },
        tagName: action.tagName,
        error: null,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case SEARCH_AGAIN_BLOG:
      return {
        ...state,
        result: {
          ...state.result,
          blogsArray: state.result.blogsArray.concat(action.blogsArray),
        },
        inProgress: false,
      };

    default:
      return {
        ...state,
      };
  }
}

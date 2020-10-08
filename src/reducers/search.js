import {
  FETCH_CONTENT_FAILURE,
  FETCH_CONTENT_START,
  FETCH_CONTENT_SUCCESS,
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
  content: '',
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
    case FETCH_CONTENT_START:
      return {
        ...state,
        inProgress: true,
        error: null,
      };
    case FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        inProgress: false,
        content: action.data,
        error: null,
      };
    case FETCH_CONTENT_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.error,
        content: '',
      };

    default:
      return {
        ...state,
      };
  }
}

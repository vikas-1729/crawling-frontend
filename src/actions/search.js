import { API_URLS } from '../helper/urls';
import {
  SEARCH_AGAIN_BLOG,
  SEARCH_FAILURE,
  SEARCH_START,
  SEARCH_SUCCESS,
} from './action-type';

export function searchStart() {
  return {
    type: SEARCH_START,
  };
}

export function searchSuccess(blogsArray, releatedTags, tagName) {
  return {
    type: SEARCH_SUCCESS,
    blogsArray,
    releatedTags,
    tagName,
  };
}
export function searchFailure(error) {
  return {
    type: SEARCH_FAILURE,
    error: error,
  };
}
export function searchAgain(blogsArray) {
  return {
    type: SEARCH_AGAIN_BLOG,
    blogsArray,
  };
}
export function search(tagName, startIndex = 1) {
  return (dispatch) => {
    dispatch(searchStart());
    const searchByTagUrl = API_URLS.searchByTag(tagName, startIndex);
    fetch(searchByTagUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('ok 2', data);
        if (data.success) {
          if (startIndex === 1) {
            dispatch(
              searchSuccess(
                data.data.blogsArray,
                data.data.releatedTags,
                tagName
              )
            );
          } else {
            dispatch(searchAgain(data.data.blogsArray));
          }
          return;
        }
        dispatch(searchFailure(data.message));
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
}

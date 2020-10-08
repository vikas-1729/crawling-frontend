import { API_URLS } from '../helper/urls';
import { getFormBody } from '../helper/utils';
import {
  FETCH_CONTENT_FAILURE,
  FETCH_CONTENT_START,
  FETCH_CONTENT_SUCCESS,
} from './action-type';

export function contentSuccess(data) {
  return {
    type: FETCH_CONTENT_SUCCESS,
    data: data,
  };
}
export function contentStart() {
  return {
    type: FETCH_CONTENT_START,
  };
}
export function contentFailure(message) {
  return {
    type: FETCH_CONTENT_FAILURE,
    error: message,
  };
}

export function searchContent(url) {
  return (dispatch) => {
    let searchContentUrl = API_URLS.content();
    dispatch(contentStart());
    fetch(searchContentUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ url }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(contentSuccess(data.data));
          return;
        }
        dispatch(contentFailure(data.message));
      })
      .catch((err) => console.log(err));
  };
}

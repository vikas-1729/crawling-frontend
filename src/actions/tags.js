import { API_URLS } from '../helper/urls';
import { FETCH_MOST_SEARCH_TAG_SUCCESS } from './action-type';

export function fetchMostSearchTagSuccess(data) {
  return {
    type: FETCH_MOST_SEARCH_TAG_SUCCESS,
    tags: data,
  };
}
export function fetchMostSearchTag() {
  return (dispatch) => {
    const mostSearchUrl = API_URLS.mostSearch();
    fetch(mostSearchUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('okk i am success', data);
        if (data.success) {
          dispatch(fetchMostSearchTagSuccess(data.data));
        }
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
}

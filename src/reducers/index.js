import { combineReducers } from 'redux';
import tags from './tags';
import search from './search';
export default combineReducers({
  tags: tags,
  search: search,
});

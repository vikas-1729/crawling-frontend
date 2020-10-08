const ROOT_API = 'https://crawling-backend-api.herokuapp.com/api/v1';
export const API_URLS = {
  mostSearch: () => `${ROOT_API}/mostSearch`,
  searchByTag: (tag, index) => `${ROOT_API}/searchByTag/${tag.toLowerCase()}`,
  linkToSearchComponent: (tag) => `search?tagName=${tag.toLowerCase()}`,
  content: () => `${ROOT_API}/content`,
};

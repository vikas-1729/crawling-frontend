const ROOT_API = 'http://localhost:8000/api/v1';

export const API_URLS = {
  mostSearch: () => `${ROOT_API}/mostSearch`,
  searchByTag: (tag, index) => `${ROOT_API}/searchByTag/${tag}`,
  linkToSearchComponent: (tag) => `search?tagName=${tag}`,
  content: () => `${ROOT_API}/content`,
};

const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  //   throw new Error('Something Bad Happened');
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);

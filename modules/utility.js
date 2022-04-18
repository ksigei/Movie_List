const showApi = 'https://api.tvmaze.com/shows';

const fetchShows = async () => {
  const res = await fetch(showApi);
  const allShows = await res.json();
  return allShows;
};

export {
  fetchShows, showApi
};

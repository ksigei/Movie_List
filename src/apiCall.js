const showApi = 'https://api.tvmaze.com/shows';
export const fetchShows = async (id) => {
  const res = await fetch(`${showApi}/${id}`);
  const allShows = res.json();
  return allShows
}

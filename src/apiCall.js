const showApi = 'https://api.tvmaze.com/shows';
const fetchShow = async (id) => {
  const res = await fetch(`${showApi}/${id}`);
  const allShows = res.json();
  return allShows;
};
export default fetchShow;

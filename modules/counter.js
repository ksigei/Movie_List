import { fetchShow , getAllLikes, getComments } from '../src/apiCall.js'

const fetchShowsCount = async () => {
  const result = await fetchShow().then((result) => result);
  return result.data.length;
};

const getLikesCount = async () => {
  const result = await getAllLikes().then((result) => result);
  return result;
};

const getNumberofComments = async (showId) => {
  const result = await getComments(showId).then((result) => result);
  if (result.error) return 0;
  return result.length;
};

export { fetchShowsCount, getLikesCount, getNumberofComments };
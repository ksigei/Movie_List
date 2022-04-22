const showApi = 'https://api.tvmaze.com/shows';
const fetchShow = async (id) => {
  const res = await fetch(`${showApi}/${id}`);
  const allShows = res.json();
  return allShows;
};

const postComment = async (id, username, comment) => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wBpjy3Zy3kfv5qbqC9Ro/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.status;
};

const getComments = async (id) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wBpjy3Zy3kfv5qbqC9Ro/comments?item_id=${id}`);
  try {
    const result = res.json();
    return result;
  } catch (err) {
    return [];
  }
};

export { fetchShow, postComment, getComments };

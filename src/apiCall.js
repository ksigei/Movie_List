const showApi = 'https://api.tvmaze.com/shows';
const involvmentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'wBpjy3Zy3kfv5qbqC9Ro';

const fetchShow = async (id) => {
  const res = await fetch(`${showApi}/${id}`);
  const allShows = res.json();
  return allShows;
};

const getAllLikes = async () => {
  const allLikes = await fetch(`${involvmentUrl}${appID}/likes`);
  const dataLikes = await allLikes.json();
  return dataLikes;
};


const postComment = async (id, username, comment) => {
  const res = await fetch(`${involvmentUrl}${appID}/comments`, {
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
  const res = await fetch(`${involvmentUrl}${appID}/comments?item_id=${id}`);
  try {
    const result = res.json();
    return result;
  } catch (err) {
    return [];
  }
};

export { fetchShow, postComment, getComments, getAllLikes };

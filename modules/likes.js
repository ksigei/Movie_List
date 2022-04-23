import { getAllLikes } from '../src/apiCall.js'

const involvmentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'wBpjy3Zy3kfv5qbqC9Ro';

const displayLikes = async (id, p) => {
  const likeAdd = await getAllLikes();
  likeAdd.forEach((like) => {
    if(like.item_id === id) {
      p.innerHTML = `${like.likes}`;
    }
  });
};

const addLikes = async (id) => {
  const awaitLikes = await fetch(`${involvmentUrl}${appID}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return awaitLikes;
};

export { displayLikes, addLikes };
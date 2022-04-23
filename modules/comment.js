import { getComments, postComment } from '../src/apiCall.js';

const showPopup = (result) => {
  const movieTitle = document.querySelector('.movie-title');
  const movieImage = document.querySelector('.movie-image');
  const movieSummary = document.querySelector('.movie-summary');
  const modalContainer = document.querySelector('.modalContainer');
  document.querySelector('.form').id = result.id;
  let summary = '';
  if (result.summary === null) {
    summary = 'The description for this movie is not available yet ...';
  } else {
    summary = result.summary.replace('<p>', '').replace('</p>', '').replace('<b>', '').replace('</b>', '');
  }
  movieTitle.textContent = result.name;
  movieImage.src = result.image.medium;
  movieSummary.textContent = summary;
  modalContainer.style.display = 'flex';
};

const updateCommentPage = async (id) => {
  const commentsCount = document.querySelector('.comments');
  const commentsList = document.querySelector('.comments-list');
  const allComments = await getComments(id);
  commentsList.innerHTML = '';
  allComments.forEach((item) => {
    commentsList.innerHTML
      += `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;
  });
  commentsCount.textContent = `Comments (${commentsList.children.length})`;
};

const submitAComment = () => {
  const form = document.querySelector('.form');
  const inputName = document.querySelector('.input-name');
  const inputText = document.querySelector('.input-text');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await postComment(form.id, inputName.value, inputText.value);
    form.reset();
    updateCommentPage(form.id);
  });
};

export { showPopup, submitAComment, updateCommentPage };

import { fetchShow } from '../src/apiCall.js';
import { showPopup, addNewComment } from './comment.js';

const displayPopup = () => {
  const commentBtn = document.querySelectorAll('.fa-comment');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const { id } = btn.parentElement.previousElementSibling;
      const result = await fetchShow(id);
      showPopup(result);
    });
  });
  addNewComment();
};
// close func
const closePopup = () => {
  const modalContainer = document.querySelector('.modalContainer');
  const closeButton = document.querySelector('.close-btn');
  closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
  });
};

export { displayPopup, closePopup };

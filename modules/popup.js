import { fetchShows } from '../src/apiCall.js';
import showPopup from './comment.js';

const displayPopup = () => {
  const commentBtn = document.querySelectorAll('.fa-comment');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const { id } = btn.parentElement.previousElementSibling;
      const result = await fetchShows(id);
      showPopup(result);
    });
  });
};

export default displayPopup;

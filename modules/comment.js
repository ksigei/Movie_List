const showPopup = async (data) => {
  const movieName = data.name;
  const movieImage = data.image.medium;
  const movieSummary = data.summary;
  const commentPopup = document.querySelector('#popup');
  commentPopup.style.display = 'block';
  commentPopup.classList.add('comment-popup');
  commentPopup.innerHTML = `<div class="shows">
                              <button type="button" class="close-btn clickable">&times;</button>
                              <div class="shows-image">
                                <img src="${movieImage}" alt="show-image">
                              </div>
                              <div class="shows-text">
                                <div class="shows-title">
                                  <h2>${movieName}</h2>
                                </div>
                                <div class="details">
                                  <p>${movieSummary}</p>
                                </div>
                              </div>
                            </div>`;
};

export default showPopup;

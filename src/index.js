import './style.css';
import { displayPopup, closePopup } from '../modules/popup.js';

const showApi = 'https://api.tvmaze.com/search/shows?q=girls';
const movieContainer = document.querySelector('.movie_list');

const fetchShows = async () => {
  const res = await fetch(showApi);
  const allShows = await res.json();

  allShows.forEach((e) => {
    const allMovies = document.createElement('div');
    allMovies.className = 'movie';
    if (e.show.image !== null) {
      allMovies.innerHTML = `
        <div>
          <img src="${e.show.image.medium}" alt="Movie">
          <p>Title: ${e.show.name}</p>
          <div class="counter">
              <div class="likes" id="${e.show.id}"><i class="fa fa-thumbs-up" aria-hidden="true"></i> </div>
              <div><i class="fa fa-comment" aria-hidden="true"></i></div>
          </div>
        </div>
        `;
    }
    movieContainer.appendChild(allMovies);
  });
  displayPopup();
  closePopup();
};
fetchShows();

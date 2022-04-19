import './style.css';

const showApi = 'https://api.tvmaze.com/search/shows?q=girls';
const movieContainer = document.querySelector('.movie_list');

window.onload = function () {
  const fetchShows = async () => {
    const res = await fetch(showApi);
    const allShows = await res.json();

    allShows.forEach((e) => {
      const allMovies = document.createElement('div');
      allMovies.className = 'movie';
      allMovies.innerHTML = `
            <div>
            <img src="${e.show.image.original}" alt="${e.show.name}">
            <p>Title: ${e.show.name}</p>
            <div class="counter">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                <i class="fa fa-comment" aria-hidden="true"></i>
            </div>
            </div>
            `;
      movieContainer.appendChild(allMovies);
    });
  };
  return fetchShows();
};

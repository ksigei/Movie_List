import './style.css';
import { displayPopup, closePopup } from '../modules/popup.js';
import { displayLikes, addLikes } from '../modules/likes.js';

const showApi = 'https://api.tvmaze.com/search/shows?q=girls/';
const show = document.querySelector('.movie_list');

const displayShows = async () => {
  const data = await fetch(showApi).then((response) => response.json());
  data.forEach((element) => {
    const showCard = document.createElement('div');
    showCard.className = 'showCard';
    let image;
    if (element.show.image !== null) {
      image = element.show.image.medium;
    } else {
      image = 'https://via.placeholder.com/150';
    }
    showCard.innerHTML = `<div id="${element.score}">
    <img class="img" src="${image}">
    <div class="counter">
    
    <button><i class="fa fa-thumbs-up" aria-hidden="true" id=${element.show.id}></i></button>
    <p class="likeShow" id=${element.show.id}></p>
    
    <button><i class="fa fa-comment" aria-hidden="true"></i></button>
    </div>
    </div>
    `;

    show.appendChild(showCard);
  });

  const likes = document.querySelectorAll('.fa-thumbs-up');
  likes.forEach((like) => {
    const element = like.parentElement.nextElementSibling;
    like.addEventListener('click', async () => {
      if (element.id === like.id) {
        await addLikes(like.id);
        await displayLikes(like.id, element);
      }
    });
    displayLikes(like.id, element);
  });

  displayPopup();
  closePopup();
};
displayShows();

const counterDiv = document.querySelector('#movie_counter');
const fetchShows = async () => {
  const res = await fetch(showApi);
  const allShows = await res.json();
  const movies = allShows.length;

  counterDiv.innerHTML = `(${movies})`;
};
fetchShows();

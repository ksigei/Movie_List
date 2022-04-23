import './style.css';
import { displayPopup, closePopup } from '../modules/popup.js';
import { displayLikes, addLikes } from '../modules/likes.js';

const showApi = 'https://api.tvmaze.com/search/shows?q=girls';
const show = document.querySelector('.movie_list');

const displayShows = async () => {
  const data = await fetch(showApi).then((response) => response.json());
  data.forEach((element) => {
    const showCard = document.createElement('div');
    showCard.className = 'showCard';
    let image;
    if (element.show.image !== null) {
        image = element.show.image.medium
    } else {
      image = 'https://via.placeholder.com/150'
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
  const likeShow = document.querySelectorAll('.likeShow');
  likes.forEach((like) => {
    like.addEventListener('click', async () => {
      likeShow.forEach((p) => {
        if (p.id === like.id) {
          addLikes(like.id);
          displayLikes(like.id, p);
        }
      });
    });
  });


  displayPopup();
  closePopup();
};
displayShows();

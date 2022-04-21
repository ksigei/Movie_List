import "./style.css";
// import { likeCounter } from '../modules/involvement.js';

const showApi = "https://api.tvmaze.com/search/shows?q=girls/";

const movieContainer = document.querySelector(".movie_list");

const showDetails = async () => {
  await fetch(showApi)
    .then((resp) => resp.json())
    // .then((resp) => {
      resp.forEach((el) => {
        const details = {
          id: el.show.id,
          title: el.show.name,
          image: el.show.image.original,
        };
        // return details
        console.log("line 51", details);
      });
    // });
  // return showDetails();
};

document.addEventListener("DOMContentLoaded", () => {
  const fetchShows = () => {
   showDetails()
    // myMovies
    const allMovies = document.createElement("div");
    allMovies.className = "movie";

    if (image !== null) {
      allMovies.innerHTML = `
      <div>
      <img src="${image}" alt="Movie">
      <p>Title: ${title}</p>
      <div class="counter">
          <div class="likes" id="${id}"><i class="fa fa-thumbs-up" aria-hidden="true"></i> </div>
          <div><i class="fa fa-comment" aria-hidden="true"></i></div>
      </div>
      </div>
      `;
    }

    movieContainer.appendChild(allMovies);
  };
  return fetchShows();
});

const fetchLikes = async () => {
  const getLikes = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wBpjy3Zy3kfv5qbqC9Ro/likes"
  );
  const res = getLikes.json();
  // console.log("line 43", res);
  // return res;
};

const updateLikes = async () => {
  await fetchLikes().then((resp) => {
    resp.forEach((e) => {
      console.log("line 43", e);
      const likeCounter = document.querySelector(".likes");
      const countlikes = document.createElement("p");
      if (e.likes !== null) {
        countlikes.innerText = `${e.likes} likes`;
      }
      likeCounter.appendChild(countlikes);
    });
  });
};
document.addEventListener("DOMContentLoaded", () => {
  // updateLikes();
  // addLikes()
  showDetails();
});

// const addLikes = async () => {
//   await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wBpjy3Zy3kfv5qbqC9Ro/likes', {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: "dd",
//       likes:
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// }


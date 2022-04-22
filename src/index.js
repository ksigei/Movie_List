import "./style.css";
// import { likeCounter } from '../modules/involvement.js';

const showApi = "https://api.tvmaze.com/search/shows?q=girls/";
const involvementApi =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const likesApi = `${involvementApi}wBpjy3Zy3kfv5qbqC9Ro/likes`;

const movieContainer = document.querySelector(".movie_list");

const showDetails = async () => {
  const getMovies = await fetch(showApi)
    .then((resp) => resp.json())
    .then((data) => {
      const detailsArr = data.map((el) => {
        const details = {
          id: el.show.id,
          title: el.show.name,
          image: el.show.image,
        };
        return details;
        // console.log("line 19", details);
      });
      return detailsArr;
      // console.log("line 22", detailsArr)
    });
  console.log("line 24", getMovies);
  return getMovies;
};
document.addEventListener("DOMContentLoaded", () => {
  const fetchShows = async () => {
    const myMovies = await showDetails();
    // console.log("line 27", myMovies);
    myMovies.forEach((element) => {
      // console.log('line 37', element.image)
      const allMovies = document.createElement("div");
      allMovies.className = "movie";
      const movieImage = element.image.original;
      // console.log('line 38', movieImage)
      // console.log('line 38', element.id)
      if (movieImage !== null) {
        allMovies.innerHTML = `
        <div>
        <img src="${movieImage}" alt="Movie">
        <p>Title: ${element.title}</p>
        <div class="counter">
            <div class="likes" id="${element.id}"><i class="fa fa-thumbs-up" aria-hidden="true"></i> </div>
            <p id="likes" data-id="${element.id}"></p>
            <div><i class="fa fa-comment" aria-hidden="true"></i></div>
        </div>
        </div>
        `;
      }

      movieContainer.appendChild(allMovies);
    });
  };
  // return fetchShows();
  console.log("line 54", fetchShows());
});

const fetchLikes = async () => {
  const getLikes = await fetch(likesApi, 
  {  
  method: 'GET',
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  }})
    .then((res) => res.json())
    .then((likes) => {
      // console.log("line 65", likes);
      const res = likes.map((e) => {
        const newLikeId = {
          id: e.item_id,
          likes: e.likes,
        };
        console.log("line 73", newLikeId.likes);
        return newLikeId;
      });
      return res;
      // console.log('line 75', res)
    });
  return getLikes;
  // console.log('line 78', getLikes)
};

//fetch likes
// console.log('line 70', fetchLikes())

const updateLikes = async () => {
  const newLikes = await fetchLikes();
  console.log("line 87", newLikes);
  newLikes.map((el) => {
    const likeCounter = document.querySelector(".likes");
    const countlikes = document.createElement("p");
    countlikes.innerText = `${el.likes} likes`;

    likeCounter.appendChild(countlikes);
  });
};

const addLikes = async (id) => {
  await fetch(likesApi, {
    method: "POST",
    body: JSON.stringify({
      item_id: id
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
};
addLikes()

const likeBtn = document.querySelector("#likes");

likeBtn.addEventListener("click", () => {
 const countLikes = addLikes();
 console.log('line 115', countLikes)
});

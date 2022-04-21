import "./style.css";
// import { likeCounter } from '../modules/involvement.js';

const showApi = "https://api.tvmaze.com/search/shows?q=girls";


const showDetails = async () => {
  const res = await fetch(showApi)
    .then((resp) => resp.json())
    .then((resp) => {
      const sliceData = resp.slice(0, 60) 
      const slicedArr = sliceData.map(() => {
        const details = {
          id: show.id,
          title: show.name,
          image: show.image
        };
         console.log("line 19", details);
        // return details
      });
      // return slicedArr
      console.log("line 21", slicedArr);
    });
    // return res
    console.log("line 23", res);
};


document.addEventListener("DOMContentLoaded", () => {
  showDetails()
  const fetchShows = (data) => {
    // const res = await fetch(showApi);
    // const allShows =  showDetails();
    console.log("line 30", data);
    data.forEach(() => {
      const movieContainer = document.querySelector(".movie_list");
      const allMovies = document.createElement("div");
        allMovies.className = "movie";
  
        if (data.image !== null) {
          allMovies.innerHTML = `
          <div>
          <img src="${data.image}" alt="Movie">
          <p>Title: ${data.title}</p>
          <div class="counter">
              <div class="likes" id="${data.id}"><i class="fa fa-thumbs-up" aria-hidden="true"></i> </div>
              <div><i class="fa fa-comment" aria-hidden="true"></i></div>
          </div>
          </div>
          `;
        }
        movieContainer.appendChild(allMovies);
    });
    showDetails()
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



// const updateLikes = async () => {
//   await fetchLikes().then((resp) => {
//     resp.forEach((e) => {
//       console.log("line 43", e);
//       const likeCounter = document.querySelector(".likes");
//       const countlikes = document.createElement("p");
//       if (e.likes !== null) {
//         countlikes.innerText = `${e.likes} likes`;
//       }
//       likeCounter.appendChild(countlikes);
//     });
//   });
// };
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

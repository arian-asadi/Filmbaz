let datas;
const cardContainer = document.querySelector(".cardContainer");
const searchInput = document.querySelector("input")
// Fetch Api 
fetchMovies();
async function fetchMovies() {
    const res = await fetch("https://api.tvmaze.com/shows");
   datas = await res.json();
    movies(datas);
    renderOptions(datas);
}
// render movies
function movies(data) {
    const cards = document.createElement("div")
    cards.classList.add("cards")
   data.forEach((movie) => {
        const makeCard = `<div class="card" style="width: 18rem;">
        <img class="card-img" src="${movie.image.medium}" alt="${movie.name}">
        <div class="card-body">
        <h4 class="card-h4 text-center">${movie.name}</h4>
        </div>
      </div>`;
      cardContainer.appendChild(cards)
      cards.innerHTML += makeCard;
  })
}
// Live search 
function liveSearch(data, value) {
    const cards = document.querySelector(".cards");
    if (value) {
      cards && cards.remove();
      const filter = data.filter(
        (ele) =>
          ele.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 
      );
      movies(filter);
    } else {
      cards && cards.remove();
      movies(datas);
    }
  }

searchInput.addEventListener("input", (e) => {
    liveSearch(datas, e.target.value)
}) 


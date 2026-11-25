// Retrieve containers for the playlist and the collection
const collectionContainer = document.getElementById("collection");
const playlistContainer = document.getElementById("playlist");

// Display empty playlist message
playlistContainer.textContent = "Your playlist is empty.";

// Place song card in function
function renderSongs(songsToRender) {
  // clear container
  collectionContainer.textContent = "";
  // Make repeating song card
  for (const song of songsToRender) {
    // create song card
    const songCard = document.createElement("article");
    songCard.classList.add("song-card");
    collectionContainer.appendChild(songCard);

    // // Make h3 element for the song title
    const songTitle = document.createElement("h3");
    songTitle.textContent = song.title;
    songCard.appendChild(songTitle);

    // Make p element for the song artist
    const songArtist = document.createElement("p");
    songArtist.textContent = song.artist;
    songCard.appendChild(songArtist);

    // Make p element for genre
    const songGenre = document.createElement("p");
    songGenre.textContent = song.genre;
    songCard.appendChild(songGenre);

    // Make p element for duration
    const songDuration = document.createElement("p");
    songDuration.textContent = song.duration;
    songCard.appendChild(songDuration);
  }
}
// Call function
renderSongs(songs);

// add filter by genre

const genreFilter = document.getElementById("genre-filter");

function filterByGenre() {
  if (genreFilter.value === "All") {
    renderSongs(songs);
  } else {
    const filteredSongs = songs.filter(function (song) {
      return song.genre === genreFilter.value;
    });
    renderSongs(filteredSongs);
  }
}

genreFilter.addEventListener("change", filterByGenre);

// add search function for song title
const searchInput = document.getElementById("search");
function searchSongs() {
  const searchedSongs = songs.filter(function (song) {
    return (
      song.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  });

  console.log(searchedSongs);
}

searchInput.addEventListener("input", searchSongs);

// Retrieve containers for the playlist and the collection
const collectionContainer = document.getElementById("collection");
const playlistContainer = document.getElementById("playlist");

// Display empty playlist message
playlistContainer.textContent = "Your playlist is empty.";

// Place song card in function
function renderSongs() {
  // clear container
  collectionContainer.textContent = "";
  // Make repeating song card
  for (const song of songs) {
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
renderSongs();

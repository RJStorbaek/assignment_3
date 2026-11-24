// Retrieve containers for the playlist and the collection
const collectionContainer = document.getElementById("collection");
const playlistContainer = document.getElementById("playlist");
playlistContainer.textContent = "Your playlist is empty.";

// Make repeatable elements for the containers

// Add song cards
const songCard = document.createElement("article");
songCard.classList.add("song-card");
collectionContainer.appendChild(songCard);

// Make h3 element for the song title
const songTitle = document.createElement("h3");
songTitle.textContent = songs[0].title;
songCard.appendChild(songTitle);

// Make p element for the song artist
const songArtist = document.createElement("p");
songArtist.textContent = songs[0].artist;
songCard.appendChild(songArtist);

// Make p element for genre
const songGenre = document.createElement("p");
songGenre.textContent = songs[0].genre;
songCard.appendChild(songGenre);

// Make p element for duration
const songDuration = document.createElement("p");
songDuration.textContent = songs[0].duration;
songCard.appendChild(songDuration);

for (const song of songs) {
  console.log(song.title);
}
for (const song of songs) {
  console.log(song.artist);
}
for (const song of songs) {
  console.log(song.duration);
}

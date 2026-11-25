// Retrieve containers for the playlist and the collection
const collectionContainer = document.getElementById("collection");
const playlistContainer = document.getElementById("playlist");
const playlist = [];

// Render playlist cards
function renderPlaylist() {
  // clear container
  playlistContainer.textContent = "";

  // Add total duration to playlist
  let totalDuration = 0;

  // Display empty playlist message
  if (playlist.length === 0) {
    playlistContainer.textContent = "Your playlist is empty.";
  }
  //   add playlist card elements
  for (const song of playlist) {
    totalDuration += song.duration;

    const playlistCard = document.createElement("article");
    playlistCard.classList.add("playlist-card");
    playlistContainer.appendChild(playlistCard);

    const songTitle = document.createElement("h3");
    songTitle.textContent = song.title;
    playlistCard.appendChild(songTitle);

    const songArtist = document.createElement("p");
    songArtist.textContent = song.artist;
    playlistCard.appendChild(songArtist);

    const songDuration = document.createElement("p");
    songDuration.textContent = song.duration;
    playlistCard.appendChild(songDuration);

    // Add "Remove from playlist" button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove from Playlist";
    playlistCard.appendChild(removeButton);
    removeButton.addEventListener("click", function () {
      const songIndex = playlist.findIndex(function (playlistSong) {
        return playlistSong.id === song.id;
      });
      if (songIndex !== -1) {
        playlist.splice(songIndex, 1);
        renderPlaylist();
      }
    });
  }
  //   Show total duration of playlist
  const playlistDuration = document.createElement("p");
  playlistDuration.textContent = `Total duration: ${totalDuration} seconds`;
  playlistContainer.appendChild(playlistDuration);
}
// Place song card in function
function renderSongs(songsToRender) {
  // clear container
  collectionContainer.textContent = "";

  //   Add no songs found message
  if (songsToRender.length === 0) {
    collectionContainer.textContent =
      "No songs found. Try another search term or genre.";
  }
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

    // Add "Add to playlist" button
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Playlist";
    songCard.appendChild(addButton);
    addButton.addEventListener("click", function () {
      const alreadyExists = playlist.some(function (playlistSong) {
        return song.id === playlistSong.id;
      });
      if (!alreadyExists) {
        playlist.push(song);
        renderPlaylist();
      }
    });
  }
}
// Call function
renderSongs(songs);
renderPlaylist();

// add filter by genre

const genreFilter = document.getElementById("genre-filter");

genreFilter.addEventListener("change", updateCollection);

// add search function for song title and artist
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", updateCollection);

// declare premises for rendering. Used for filtering and sorting

function updateCollection() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;
  const searchedSongs = songs.filter(function (song) {
    return (
      song.title.toLowerCase().includes(searchTerm) ||
      song.artist.toLowerCase().includes(searchTerm)
    );
  });
  const selectedSort = sortBy.value;

  let filteredSongs = searchedSongs;

  if (selectedGenre !== "All") {
    filteredSongs = searchedSongs.filter(function (song) {
      return song.genre === selectedGenre;
    });
  }

  if (selectedSort === "length") {
    filteredSongs.sort(function (a, b) {
      return a.duration - b.duration;
    });
  } else if (selectedSort === "title") {
    filteredSongs.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  } else if (selectedSort === "artist") {
    filteredSongs.sort(function (a, b) {
      return a.artist.localeCompare(b.artist);
    });
  }

  renderSongs(filteredSongs);
}

// Add sorting function
const sortBy = document.getElementById("sort-by");
sortBy.addEventListener("change", updateCollection);

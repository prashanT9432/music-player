const genreFilter = document.getElementById("genres");
const songListEle = document.querySelector(".song-list");
const image = document.getElementById("image");
const title = document.getElementById("title");
const owner = document.getElementById("owner");
const audio = document.querySelector("audio");
const songPlayerSource = document.getElementById("song-player-source");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.querySelector("body");
const createPlaylistForm = document.getElementById("create-playlist");
const submitBtn = document.querySelector(".submit-button");
const addToPlaylistBtn = document.querySelector(".add-to-playlist");
const allPlaylistEle = document.querySelector(".all-playlist");
const currentPlaylistEle = document.querySelector(".current-playlist");

const genreAray = ["All", "Rock", "Pop", "Hip Hop"];

const songsData = [
  {
    id: 1,
    title: "Numb",
    owner: "Linkin Park",
    name: "song/Numb.mp3",
    songType: "Rock",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShU9oelbmXOasG-MaG_Ja_OMouxDl19bqR3KkhUi_Nj9rFxPuRvFfo9Fr5WsfqUNBxeSU&usqp=CAU",
  },
  {
    id: 2,
    title: "Rolling in the Deep",
    owner: "Adele",
    name: "song/Rolling-in-the-Deep.mp3",
    songType: "Rock",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    title: "Love",
    owner: "Will.I.AM",
    name: "song/force.mp3",
    songType: "Hip Hop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXVpsQSu5n7O9o1Db--nUGoFM6OmECrfW9A&usqp=CAU",
  },
  {
    id: 4,
    title: "Inspire",
    owner: "NCS",
    name: "song/hope.mp3",
    songType: "Hip Hop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDhQmycc1zIKaq11TRzxFzCB-JsCjtKkazA&usqp=CAU",
  },
  {
    id: 5,
    title: "Into You",
    owner: "Ariana Grande",
    name: "song/Into-You.mp3",
    songType: "Hip Hop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeWw9F33yhs3rYPY1961RQL5K9TaP0z6WKg&s",
  },
];

const playListArr = [];

let currentPlaylist = 0;

let currentSelectedSong = songsData[0].id;
let counter = 0;

function createOption(value) {
  const option = document.createElement("option");
  option.textContent = value;
  genreFilter.appendChild(option);
}

function addOption() {
  genreFilter.textContent = "";
  genreAray.forEach((genre) => {
    createOption(genre);
  });
  genreFilter.value = genreAray[0];
  showSongs();
}

// display all songs
function showSongs() {
  songListEle.textContent = "";
  const filterValue = genreFilter.value;
  const filteredArr =
    filterValue != "All"
      ? songsData.filter((song) => song.songType == filterValue)
      : [...songsData];
  if (filteredArr.length) {
    filteredArr.forEach((song) => {
      addSong(song);
    });
  }
}

function addSong(song, element) {
  const div = document.createElement("div");
  div.textContent = `${song.title} - ${song.owner}`;
  div.classList.add("song-name");
  songListEle.appendChild(div);
  div.addEventListener("click", () => {
    currentSelectedSong = song.id;
    renderCurrentSong();
  });
}

function searchSongById(id) {
  return songsData.find((song) => song.id == id);
}

// Render current song card
function renderCurrentSong() {
  if (currentSelectedSong) {
    const songObj = searchSongById(currentSelectedSong);
    image.src = `${songObj.image}`;
    title.textContent = songObj.title;
    owner.textContent = songObj.owner;

    // create source for audio
    songPlayerSource.src = `${songObj.name}`;
    songPlayerSource.type = "audio/mp3";
    audio.currentTime = 0;
    audio.load();
    audio.play();
  }
}

// Go to previous song
function playPrevious() {
  if (counter - 1 < 0) {
    previous.disabled = true;
    return;
  }
  counter--;
  next.disabled = false;
  currentSelectedSong = songsData[counter].id;
  renderCurrentSong();
}

// Go to next song
function playNext() {
  if (counter + 1 >= songsData.length) {
    next.disabled = true;
    return;
  }
  counter++;
  previous.disabled = false;
  currentSelectedSong = songsData[counter].id;
  renderCurrentSong();
}

function renderPlaylistSong(playlistId) {
  currentPlaylist = playlistId;

  const playlistIndex = findPlaylist();
  if (playlistIndex !== -1) {
    currentPlaylistEle.textContent = "";
    playListArr[playlistIndex].songs.forEach((songObj) => {
      addPlaylistEle(songObj);
    });
  }
}
// Create playlist
function createPlaylist() {
  let playlistInput = document.getElementById("playlist-name");
  if (playlistInput.value) {
    const playlistId = playListArr.length + 1;
    playListArr.push({
      id: playlistId,
      name: playlistInput.value,
      songs: [],
    });

    const div = document.createElement("div");
    div.textContent = playlistInput.value;
    div.classList.add("playlist-name");
    allPlaylistEle.appendChild(div);

    div.addEventListener("click", () => {
      renderPlaylistSong(playlistId);
    });
    createPlaylistForm.reset();
    if (currentPlaylist === 0) {
      currentPlaylist = playlistId;
    }
  }
}

function checkSongExistInPlaylist(playlistIndex) {
  return playListArr[playlistIndex].songs.findIndex(
    (song) => song.id === currentSelectedSong
  );
}

function findPlaylist() {
  return playListArr.findIndex((playlist) => playlist.id == currentPlaylist);
}

function addPlaylistEle(songObj) {
  const div = document.createElement("div");
  div.textContent = `${songObj.title} - ${songObj.owner}`;
  div.classList.add("current-playlist-song");

  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-trash");
  div.appendChild(i);

  currentPlaylistEle.appendChild(div);

  // Render song from playlist
  div.addEventListener("click", (event) => {
    event.stopPropagation();
    currentSelectedSong = songObj.id;
    renderCurrentSong();
  });

  // Remove song from playlist
  i.addEventListener("click", (event) => {
    event.stopPropagation();
    div.remove();
  });
}

// Add song to playlist
function addToPlaylist() {
  if (currentPlaylist !== 0) {
    const playlistIndex = findPlaylist();
    if (
      playlistIndex !== -1 &&
      checkSongExistInPlaylist(playlistIndex) === -1
    ) {
      const songObj = searchSongById(currentSelectedSong);
      playListArr[playlistIndex].songs.push(songObj);
      addPlaylistEle(songObj);
    }
  }
}

// All event listners
genreFilter.addEventListener("change", (event) => {
  event.preventDefault();
  showSongs();
});

previous.addEventListener("click", (event) => {
  event.preventDefault();
  playPrevious();
});

next.addEventListener("click", (event) => {
  event.preventDefault();
  playNext();
});

toggleThemeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  toggleThemeBtn.dataset.theme =
    toggleThemeBtn.dataset.theme == "light" ? "dark" : "light";
  const darkThemeBtn = document.getElementById("darkThemeBtn");
  const lightThemeBtn = document.getElementById("lightThemeBtn");
  if (toggleThemeBtn.dataset.theme == "light") {
    darkThemeBtn.style.display = "none";
    lightThemeBtn.style.display = "block";
    body.classList.remove("dark");
    removeDarkModeClasses();
  } else {
    darkThemeBtn.style.display = "block";
    lightThemeBtn.style.display = "none";
    body.classList.add("dark");
    addDarkModeClasses();
  }
});

function addDarkModeClasses() {
  const darkModeElements = document.querySelectorAll(
    ".song-name, .playlist-name, .current-playlist-song"
  );

  darkModeElements.forEach((element) => {
    element.classList.add("dark-mode");
  });

  const darkModeWrappers = document.querySelectorAll(
    ".songs-list-wrapper, .song-card-wrapper, .playlist-wrapper"
  );

  darkModeWrappers.forEach((wrapper) => {
    wrapper.classList.add("dark-mode-wrapper");
  });
}

function removeDarkModeClasses() {
  const darkModeElements = document.querySelectorAll(
    ".song-name, .playlist-name, .current-playlist-song"
  );

  darkModeElements.forEach((element) => {
    element.classList.remove("dark-mode");
  });

  const darkModeWrappers = document.querySelectorAll(
    ".songs-list-wrapper, .song-card-wrapper, .playlist-wrapper"
  );

  darkModeWrappers.forEach((wrapper) => {
    wrapper.classList.remove("dark-mode-wrapper");
  });
}

createPlaylistForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createPlaylist();
});

addToPlaylistBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addToPlaylist();
});

addOption();
renderCurrentSong();
audio.pause();

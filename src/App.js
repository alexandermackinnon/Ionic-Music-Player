<<<<<<< HEAD
// IMPORT REACT
import React, { useState } from "react";
// IMPORT STYLES
import "./styles/app.scss";
// IMPORT COMPONENTS
import Player from "./components/Player.js";
import Song from "./components/Song.js";
// IMPORT DATA
import data from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
=======
// IMPORTING REACT
import React from "react";

// IMPORTING COMPONENTS
import Player from "./components/Player.js";
import Song from "./components/Song.js";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
>>>>>>> 18382129c7d5a0123fa20450b0d2dd3feb0e726c
    </div>
  );
}

export default App;

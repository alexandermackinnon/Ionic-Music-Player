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
  const [songs /*setSongs*/] = useState(data());
  const [currentSong /*setCurrentSong*/] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;

// IMPORTING REACT
import React from "react";

const LibrarySong = ({ song }) => {
  return (
    <div className="library-song">
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h4>{song.name}</h4>
        <h5>{song.artist}</h5>
      </div>
    </div>
  );
};

export default LibrarySong;

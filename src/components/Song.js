// IMPORTING REACT
import React from "react";

<<<<<<< HEAD
const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
=======
const Song = () => {
  return (
    <div className="song">
      <h1>Artwork</h1>
      <h1>Song Name</h1>
      <h1>Artist</h1>
>>>>>>> 18382129c7d5a0123fa20450b0d2dd3feb0e726c
    </div>
  );
};

export default Song;

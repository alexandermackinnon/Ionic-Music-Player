// IMPORTING REACT
import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  audioRef,
  song,
  songs,
  setCurrentSong,
  id,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    audioRef.current.play();
    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    // Check if the song is playing
    playAudio(audioRef, isPlaying);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h4>{song.name}</h4>
        <h5>{song.artist}</h5>
      </div>
    </div>
  );
};

export default LibrarySong;

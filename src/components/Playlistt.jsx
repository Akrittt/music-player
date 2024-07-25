import React from 'react'
import { useState } from 'react';

export const Playlistt = ({playlist}) => {
 
  return (
    <div className="playlist-sidebar">
      <h2>Playlist</h2>
      <ul>
        {playlist.map((song,index) => (
          <li key={index}>{song.trackName}
          
          <audio src={song.previewUrl} controls/></li>
          
        ))}
      </ul>
    </div>
  );
};
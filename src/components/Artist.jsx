import React from 'react'
import { useState } from 'react';

export const Artist = ({song,addToPlaylist}) => {
    const handleAddToPlaylist = () =>{
        addToPlaylist(song)
    }

  return (
    <div className='artist'>
        <h3 className='artist-name'>{song.artistName}</h3>
        <img src={song.artworkUrl30} alt="song image"  />
        <p >{song.trackName} </p>
        <audio src={song.previewUrl} controls/>
        <button onClick={handleAddToPlaylist}>Add To Playlist</button>
    </div>
  )
}

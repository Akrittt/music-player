import React, { useEffect, useState } from 'react'
import { getSongs } from '../services/Api_client'
import { Artist } from './Artist'


export const Body = ({addToPlaylist}) => {
  const [allSongs,setSongs] = useState([])
  useEffect(() => {
      const fetchSongs = async () => {
        try {
          const response = await getSongs('sonu nigam')
          setSongs(response.data['results'])
        } catch (error) {
          console.error(error)
        }
      }

      fetchSongs();
  }, []);

  return (
    <>
    <main>
        <div className='artist-section'>
            <h2>Top Songs of Top Artist</h2>
            <div className='artist-container'>
              {allSongs.map((song,index) =>(<Artist key ={index} song={song} addToPlaylist={addToPlaylist} />))}
            </div>
        </div>
    </main>
    </>
  )
}

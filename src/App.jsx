import { useState,useCallback } from 'react';
import './App.css';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { Playlistt } from './components/Playlistt';

export const App = () => {
  const [playlist, setPlaylist] = useState([]);

   const addToPlaylist = (song) => {
    setPlaylist([...playlist, song]);
  };
  return (
    <div>
      <Header/>
      <Body addToPlaylist = {addToPlaylist}/>
      <Playlistt playlist ={playlist} />
      
    </div>
  )
}

export default App

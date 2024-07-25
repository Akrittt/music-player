import React from 'react'

export const Header = () => {
  return (
    <div>
        <nav>
            <div className='logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg" alt="Music Player Logo" />
                <h1>Music Player</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Artist</a></li>
                <li><a href="#">Track</a></li>
            </ul>
        </nav>
    </div>
  )
}

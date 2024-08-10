import React, { useRef, useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch((error) => {
        console.log("Play was interrupted:", error);
      });
      setIsPlaying(true);
    }
  };
  
  

  return (
    <>
      <div className='Maincontainer'>
        <h3 className='Head'>Music Player</h3>
        <div className='song'>
          <audio ref={audioRef} controls>
            <source src="/assets/6.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <button onClick={playAudio}>Play</button>
        <button onClick={pauseAudio}>Pause</button>
      </div>
    </>
  );
};

export default MusicPlayer;

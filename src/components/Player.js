import React, { useRef, useState } from "react";
import { GiPreviousButton, GiPlayButton, GiNextButton } from "react-icons/gi";
import { CgPlayPause } from "react-icons/cg";
import { styled } from "styled-components";

const Player = ({ songs }) => {
  const songRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playPauseHandler = () => {
    if (playing) {
      songRef.current.pause();
    } else {
      songRef.current.play();
    }
    setPlaying(!playing);
  };

  const playPreviousSong = () => {
    if (currentSongIndex > 0) {
        setCurrentSongIndex(currentSongIndex - 1);
    } else {
        setCurrentSongIndex(songs.length - 1);
    }
};

const playNextSong = () => {
    if (currentSongIndex < songs.length - 1) {
        setCurrentSongIndex(currentSongIndex + 1);
    } else {
        setCurrentSongIndex(0);
    }
};

  const updateTime = () => {
    setCurrentTime(songRef.current.currentTime);
    setDuration(songRef.current.duration);
  };

  const formatTime = (time) => {
    return Math.floor(time/60)
+":"+("0" +Math.floor(time%60)).slice(-2)  };

  return (
    <PlayerContainer className="player">
      <span>{formatTime(currentTime)}</span>
      <input
        type="range"
        value={currentTime}
        max={duration}
        onChange={(e) => (songRef.current.currentTime = e.target.value)}
      />
      <span>{formatTime(duration)}</span>
      <div className="icons">
        <GiPreviousButton onClick={playPreviousSong} className="icon" />
        {playing ? (
          <CgPlayPause onClick={playPauseHandler} className="icon" />
        ) : (
          <GiPlayButton onClick={playPauseHandler} className="icon" />
        )}

        <GiNextButton onClick={playNextSong} className="icon" />
      </div>
      <audio
        controls
        ref={songRef}
        src={songs[currentSongIndex].audio}
        onTimeUpdate={updateTime}
        style={{ display: "none" }}
      />
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  input[type="range"] {
    margin: 20px;
    width: 20%;
    color: #5483b3;
  }

  span {
    text-align: center;
    color: #5483b3;
  }

  .icons {
    margin-top: 20px;
    font-size: 40px;
    color: #5483b3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon:nth-child(2){
    font-size: 60px;
    margin: 0 20px;
  }
  
  .icon {
    cursor: pointer;
  }
  @media only screen and(max-width:600px) {
    .player{width:50%}
  }

  /* width: 30%;
  margin: auto;
  text-align: center;

  input[type="range"] {
    margin: 20px 0;
    width: 80%;
    color: #5483b3;
  }

  span {
    color: #5483b3;
  }

  .icons {
    margin-top: 20px;
    font-size: 40px;
    color: #5483b3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon:nth-child(2) {
    font-size: 60px;
    margin: 0 20px;
  }

  .icon {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    width: 50%;
    input[type="range"] {
      width: 20%;
    }
  }

  @media only screen and (max-width: 480px) {
    width: 70%;
    input[type="range"] {
      width: 50%;
    }
  }

  @media only screen and (max-width: 320px) {
    width: 90%;
    input[type="range"] {
      width: 75%;
    }
    .icons {
      font-size: 30px;
    }
    .icon:nth-child(2) {
      font-size: 40px;
    }
  } */
`;

export default Player;

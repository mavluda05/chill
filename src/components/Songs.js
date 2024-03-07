import React from 'react'
import Song from './Song'
import { styled } from 'styled-components'

const Songs = ({songs, songsInfo}) => {
  return (
    <SongsContainer >
      <div className={songsInfo? "show" :"hide"}>
        {songs.map((song, index)=>(
            <Song img={song.cover} artist={song.artist} title={song.name} />
        ))}
        </div>
    </SongsContainer>
  );
};
const SongsContainer=styled.div`
.hide{
position: absolute;
top: 0;
left: -399px;
display: flex;
flex-direction: column;
overflow: auto;
height: 100vh;
width: 40vh;
transition: all 1s linear;
opacity: 0;
}
.show{
left: 0;
position: absolute;
top: 0;
display: flex;
flex-direction: column;
overflow: auto;
height: 100vh;
width: 40vh;
transition: all 1s linear;
opacity: 1;
}
::-webkit-scrollbar-thumb{
    background-color: #052659;
    border-radius:10px;
  }
  ::-webkit-scrollbar-track{
    background-color: grey;
  }
  ::-webkit-scrollbar{
  width:6px;}
@media only screen and(max-width:480px){
.show,.hide{width:100%}
}

`
export default Songs
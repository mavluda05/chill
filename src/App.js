import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Player from './components/Player'
import chillHop from './data'
import { GlobalStyled } from './components/GlobalStyled'
import Songs from './components/Songs'
import {ScaleLoader} from "react-spinners";
import { styled } from 'styled-components'

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

const App = () => {
  const[songs, setSongs]=useState([])
  const[songsInfo, setSongsInfo]=useState(false);
  const [loading, setLoading]=useState(true);
  const[playing, setPlaying]=useState(true)
  const[currentSong, setCurrentSong]=useState()

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }, [])

  const showInfo=()=>{
    setSongsInfo(!songsInfo);
  }

  useEffect(()=>{
    setSongs(chillHop)
  }, [])
  return (
    <>
    {loading ? (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <ScaleLoader size={150} color='#36d7b7' css={override} />
      </div>
    ) : (
      <ContainerApp className='cont'>
        <GlobalStyled />
        <Navbar showInfo={showInfo} />
        <Songs songs={songs} songsInfo={songsInfo} />
        <Main songs={songs} />
        <Player songs={songs} playing={playing} setPlaying={setPlaying}/>
      </ContainerApp>
    )}
  </>
  )
}
const ContainerApp=styled.div`
@media only screen and(min-width:1200px) {
    .cont{width:100%}
}
`
export default App
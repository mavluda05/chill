import React, { useState } from 'react'
import {GiMusicalNotes} from 'react-icons/gi';
import { styled } from 'styled-components';


const Navbar = ({showInfo}) => {


  return (
    <Nav>
    <h1>Chill</h1>
      <button onClick={showInfo}>Lists <GiMusicalNotes /></button>
      </Nav>
  )
  }
const Nav=styled.div`
display: flex;
justify-content: space-around;
color: white;
align-items: center;
height: 10vh;
h1{
  font-size: 40px;
}
button{
  background-color: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 7px;
  padding: 7px 15px;
  font-size: 20px;
  cursor: pointer;
}
`
export default Navbar
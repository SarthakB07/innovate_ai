import React , { useState} from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../assets/logo.png';

// const Menu= () => {
//   <>
//   <p><a href="#home">Home</a></p>
//   <p><a href="#wgpt3">What is GPT?</a></p>
//   <p><a href="#possibility">Open AI</a></p>
//   <p><a href="#features">Case Study</a></p>
//   <p><a href="#blog">Library</a></p>
//   </>
// }

function Navbar() {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src= { logo } alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'> 
          <p><a href="/">Home</a></p>
          <p><a href="/login">Innvoate Ai?</a></p>
          <p><a href="/rules">Rules & regulation</a></p>
          <p><a href="#features"></a></p>
          <p><a href="#blog"></a></p>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <a href="/login"><p>Sign in</p></a>
        <a href="/signup"><button type='button' >Sign up</button></a>
      </div>
      <div className='gpt3__navbar-menu'>
      { toggleMenu
          ? <RiCloseLine color='#ffff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#ffff' size={27} onClick={() => setToggleMenu(true)}/>
      }
      { toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <p><a href="#home">Home</a></p>
              <p><a href="#whpt3">What is GPT?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Study</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
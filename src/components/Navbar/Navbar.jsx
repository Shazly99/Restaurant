import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.scss';
import image from '../../constants/images'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='app__navber'>
      <div className="app__navber-logo">
        <img src={image.gericht} />
      </div>
      <ul className='app__navbar-links'>
        {
          ['Home', 'About', 'Menu', 'Awards', 'Content'].map((item, index) => {
            return (
              <li className='p__opensans' key={index}> <a href={`#${item}`}>{item}</a> </li>
            )
          })
        }
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>LogIn / Register</a>
        <div></div>
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} cursor={'pointer'} onClick={() => { setToggleMenu(true) }} />
        {
          toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu fontSize={27} cursor={'pointer'} className="overlay__close" onClick={() => { setToggleMenu(false) }} />
              <ul className='app__navbar-smallscreen-links'>
                {
                  ['Home', 'About', 'Menu', 'Awards', 'Content'].map((item, index) => {
                    return (
                      <li className='p__opensans' key={index} > <a onClick={() => { setToggleMenu(false) }} href={`#${item}`}>{item}</a> </li>
                    )
                  })
                }
              </ul>
            </div>
            
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;

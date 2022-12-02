import React from 'react';
import images from '../../constants/images';
import './Header.scss';
import SubHeading from './../../components/SubHeading/SubHeading';

const Header = () => (
  <div className="app__header section__padding app__wrapper" id='Home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to fine Dining </h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      <button className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome}/>
    </div>
  </div>
);

export default Header;

import React from 'react';
import './SpecialMenu.scss';
import {images,data} from '../../constants'
import SubHeading from './../../components/SubHeading/SubHeading';
import MenuItem from './../../components/Menuitem/MenuItem';
const SpecialMenu = () => (
  <div className='app__SpecialMenu  section__padding' id='Menu'>
    <div className="app__SpecialMenu-title">
      <SubHeading title={'Menu That Fits Your Palatte' } />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className="app__SpecialMenu-menu">
      <div className="app__SpecialMenu-menu_wine  ">
        <p className='app__SpecialMenu_menu_heading'>Wine & Beer</p>
        <div className="app__SpecialMenu_menu_items">
          {
            data.wines.map((wine,index)=>(
              <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))
          }
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu}   />
      </div>

      <div className="app__SpecialMenu-menu_wine ">
        <p className='app__SpecialMenu_menu_heading'>Cocktails</p>
        <div className="app__SpecialMenu_menu_items">
          {
            data.cocktails.map((cocktails,index)=>(
              <MenuItem key={index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
            ))
          }
        </div>
      </div>

    </div>
    <div style={{marginTop:'15px'}}>
      <button className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;

import React from 'react';
 
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi'

import './Footer.scss';
import Newsletter from './../../components/Footer/Newsletter';
import FooterOverlay from './../../components/Footer/FooterOverlay';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
  </div>
);

export default Footer;

import React from 'react';
import images from '../../constants/images';
import './AboutUs.scss';

const AboutUs = () => (
  <>
    <div className="app__aboutus app__bg flex__center section__padding" id='About'>
      <div className="app__aboutus-overlay flex__center ">
        <img src={images.G}  />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content-about">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} className="spoon__img"   />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button className='custom__button'>Know More</button>
        </div>
        <div className="app__about-content_knife flex__center">
          <img src={images.knife}  />
        </div>
        <div className="app__aboutus-content-history">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} className="spoon__img"   />
          <p className='p__opensans'>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
          <button className='custom__button'>Know More</button>
        </div>
      </div>
    </div>

    {/* <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content-about">
          <h1 className='headtext__cormorant'>Our History
</h1>
          <img src={images.spoon} className="spoon__img" alt="" srcset="" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button className='custom__button'>Know More</button>
        </div>
      </div> */}
  </>
);

export default AboutUs;

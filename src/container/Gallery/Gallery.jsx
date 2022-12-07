import React, { useRef } from 'react'
 
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import './Gallery.scss';
import SubHeading from './../../components/SubHeading/SubHeading';
import { images } from '../../constants';


function Gallery() {
  const scrollRef = useRef(null)
  const img=[images.gallery01,images.gallery02,images.gallery03,images.gallery04]
  const scroll=(direction)=>{
    const {current}= scrollRef
console.log(current);
    if (direction == 'left') {
      current.scrollLeft -=300;
      console.log(current.scrollLeft);
    }else{
      current.scrollLeft +=300;
    }
  }
  return (
    <div className="app__gallary flex__center">

      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">
          Photo Gallery
        </h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas .</p>
        <button className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            img.map((img,index)=>(
              <div className='app__gallery-images_card flex__center' key={index}>
                <img src={img}  />
                <BsInstagram className='gallary__image-icon'/>
              </div>
            ))
          }
        </div>

        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className='gallary__arrow-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallary__arrow-icon' onClick={()=>scroll('right')}/>
        </div>

      </div>
    </div>
  )
}


export default Gallery;

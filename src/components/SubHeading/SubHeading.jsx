import React from 'react';
import image from '../../constants/images'


const SubHeading = ({title}) => (

  <div style={{marginBottom:'1rem',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={image.spoon} alt="" className='spoon__img' />
  </div>
  
);

export default SubHeading;

import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'
import './Intro.scss';
import { meal } from '../../constants'


import React, { useState } from 'react'
import { useRef } from 'react';

function Intro() {
  const [playVideo, setPlayVideo] = useState('');
  const vidRef = useRef();

  const handelVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    setPlayVideo(true);
    setPlayVideo(false)
  }

  return (
    <>
      <div className="app__video">
        <video
          src={meal}
          type='video/mp4'
          loop
          width={450}
        />

        <div className="app__video-overlay flex__center ">
          <div
            onClick={handelVideo}
            className="app__video-overlay_circle flex__center " >

          </div>
        </div>
      </div>


    </>
  )
}

export default Intro

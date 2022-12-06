import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'
import './Intro.scss';
import { meal } from '../../constants'


import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handelVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }
  useEffect(() => {
    console.log(vidRef.current.value);
  }, [])

  return (
    <>
      <div className="app__video">
        <video
          src={meal}
          type='video/mp4'
          loop
          controls={false}
          ref={vidRef}
          className="video"
        />

        <div className="app__video-overlay flex__center ">
          <div
            onClick={handelVideo}
            className="app__video-overlay_circle flex__center " >
            {
              playVideo ? (
                <BsPauseFill color='#fff' fontSize={30} />
              ) : (
                <BsFillPlayFill color='#fff' fontSize={30} />
              )
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default Intro

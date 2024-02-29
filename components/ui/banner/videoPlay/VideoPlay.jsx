"use client"

import { useEffect, useRef } from "react";
import styles from "./videoPlay.module.css"

const VideoPlay = ({ url, play = false }) => {
  const vidRef = useRef(null);

  useEffect(() => {
    const video = vidRef.current;

    const handleCanPlay = () => {
      if (play && video) {
        video.play().catch(error => {
          // Handle error if play() fails
          console.error('Failed to start playback:', error);
        });
      }
    };

    if (video) {
      video.addEventListener('canplay', handleCanPlay);
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [play]);





  return (
    <video ref={vidRef} className={styles.videoBanner} width="1000" height="396" autoPlay muted loop>
      <source src={url} type="video/mp4" />
    </video>
  )
}

export default VideoPlay
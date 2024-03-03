"use client"

import { useEffect, useRef, useState } from "react";
import styles from "./videoPlay.module.css"

const VideoPlay = ({ url, display, play = false }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const vidRef = useRef(null);

  useEffect(() => {
    const video = vidRef.current;

    const handleCanPlay = () => {
      if (play && video) {
        video.play().catch(error => {
          console.error('Failed to start playback:', error);
        });
      }
    };

    const handleLoadedMetadata = () => {
      setVideoLoaded(true);
    };

    if (video) {
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      // Start loading the video when component mounts
      video.load();

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [play]);

  return (
    <div styles={{ display: display ? "block" : "none" }} className={`${styles.videoContainer} ${!videoLoaded && styles.loading}`}>
      <video ref={vidRef} className={styles.videoBanner} width="1000" height="396" autoPlay muted loop>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlay;

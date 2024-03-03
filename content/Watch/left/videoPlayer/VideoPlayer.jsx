import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import styles from "./videoPlayer.module.css"

import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';

const VideoPlayer = ({ data }) => {
  const { watch, VideoSelected, cover } = data

  return VideoSelected === "default" ? (
    <MediaPlayer src={VideoSelected === "default" ? watch?.sources?.filter(item => item.quality === VideoSelected)[0].url : null} className={styles.container} >
      <MediaProvider>
        <Poster src={cover || "/images/banner/Stronger than ever.jpeg"} className={styles.mediaPoster} alt='poster' />
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer >
  ) : (
    <iframe src={VideoSelected} className={styles.container} frameBorder="0" allowFullScreen></iframe>
  )
}

export default VideoPlayer
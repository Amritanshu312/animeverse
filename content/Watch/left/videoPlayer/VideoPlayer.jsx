import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import styles from "./videoPlayer.module.css"

import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
const VideoPlayer = ({ data }) => {
  const { watch, videoSelected, cover } = data

  return (
    <MediaPlayer src={watch?.sources?.filter(item => item.quality === videoSelected)[0].url} className={styles.container}>
      <MediaProvider>
        <Poster src={cover || "/images/banner/Stronger than ever.jpeg"} className={styles.mediaPoster} alt='poster' />
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />

    </MediaPlayer>
  )
}

export default VideoPlayer
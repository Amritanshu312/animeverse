import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import styles from "./videoPlayer.module.css"

import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
const VideoPlayer = () => {
  return (
    <MediaPlayer src="https://www111.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1709225406.m3u8" className={styles.container}>
      <MediaProvider>
        <Poster src="/images/banner/Stronger than ever.jpeg" className={styles.mediaPoster} alt='poster' />
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />

    </MediaPlayer>
  )
}

export default VideoPlayer
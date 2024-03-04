import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import styles from "./videoPlayer.module.css"

import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
const VideoPlayer = ({ data }) => {
  const { watch, VideoSelected, cover } = data
  const { url, server } = VideoSelected

  return watch === null ?
    <div className={styles.loading}></div>
    : server === "default" ? (
      <MediaPlayer src={server === "default" && watch?.sources?.filter(item => item.quality === "default")[0].url} className={styles.container} >
        <MediaProvider>
          <Poster src={cover || "/images/banner/Stronger than ever.jpeg"} className={styles.mediaPoster} alt='poster' />
        </MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />

      </MediaPlayer >
    ) : (
      <iframe src={url} className={styles.container} frameBorder="0"></iframe>
    )
}

export default VideoPlayer
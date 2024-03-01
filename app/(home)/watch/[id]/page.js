import AnimeInfo from "@/content/Watch/animeInfo/AnimeInfo"
import VideoPlayer from "@/content/Watch/videoPlayer/VideoPlayer"
import styles from "./watch.module.css"
import VideoOption from "@/content/Watch/videoOption/VideoOption"
import VideoSelector from "@/content/Watch/videoSelector/VideoSelector"
import EpisodeSelector from "@/content/Watch/episodeSelector/EpisodeSelector"
const page = () => {
  return (
    <>
      <AnimeInfo />
      <div className={styles.container}>
        <div className={styles.left}>
          <VideoPlayer />
          <VideoOption />
          <VideoSelector />
          <EpisodeSelector />
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  )
}

export default page
import AnimeInfo from "@/content/Watch/left/animeInfo/AnimeInfo"
import VideoPlayer from "@/content/Watch/left/videoPlayer/VideoPlayer"
import styles from "./watch.module.css"
import VideoOption from "@/content/Watch/left/videoOption/VideoOption"
import VideoSelector from "@/content/Watch/left/videoSelector/VideoSelector"
import EpisodeSelector from "@/content/Watch/left/episodeSelector/EpisodeSelector"
import MostPopular from "@/content/Watch/right/mostPopular/MostPopular"
import Recommendation from "@/content/Watch/right/recommendation/Recommendation"
import AtoZalphabet from "@/components/ui/AtoZalphabet/AtoZalphabet"
const page = ({ params }) => {
  const { id } = params
  console.log(id);
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
        <div className={styles.right}>
          <Recommendation />
          <MostPopular />
        </div>
      </div>

      <AtoZalphabet />
    </>
  )
}

export default page
import styles from "./videoOption.module.css"
import { FaArrowLeft } from "react-icons/fa6";
import { IoBookmark } from "react-icons/io5";
import { FaArrowRight, FaCommentAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const VideoOption = ({ id, currentEpisode, VideoOptionToggler }) => {
  const router = useRouter();

  const previousEpisode = () => {
    if (currentEpisode > 1) {
      router.push("/watch/" + id + "?episodeID=" + VideoOptionToggler[0].id + "&episode=" + VideoOptionToggler[0].number)
    }
  }
  const NextEpisode = () => {
    if (VideoOptionToggler[2] !== null) {
      router.push("/watch/" + id + "?episodeID=" + VideoOptionToggler[2].id + "&episode=" + VideoOptionToggler[2].number)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={previousEpisode}><span><FaArrowLeft /> Prev:</span>Episode {VideoOptionToggler?.[0]?.number || 1}</button>
      <button><IoBookmark /> Bookmark</button>
      <button onClick={() => router.push("/info/" + id)}>View Details</button>
      <button><FaCommentAlt /> Comments (45)</button>
      <button onClick={NextEpisode}><span>Next:</span>Episode {VideoOptionToggler?.[2]?.number || VideoOptionToggler?.[1]?.number} <span><FaArrowRight /></span></button>
    </div>
  )
}

export default VideoOption
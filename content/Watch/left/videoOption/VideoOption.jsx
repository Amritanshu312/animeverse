import styles from "./videoOption.module.css"
import { FaArrowLeft } from "react-icons/fa6";
import { IoBookmark } from "react-icons/io5";
import { FaArrowRight, FaCommentAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const VideoOption = ({ id, currentEpisode }) => {
  const router = useRouter();

  const previousEpisode = () => {
    if (currentEpisode > 1) {
      router.push("/watch/" + id + "?episode=" + (currentEpisode - 1))
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={previousEpisode}><span><FaArrowLeft /> Prev:</span>Episode {parseInt(currentEpisode) > 1 ? parseInt(currentEpisode) - 1 : parseInt(currentEpisode)}</button>
      <button><IoBookmark /> Bookmark</button>
      <button onClick={() => router.push("/info/" + id)}>View Details</button>
      <button><FaCommentAlt /> Comments (45)</button>
      <button><span>Next:</span>Episode {parseInt(currentEpisode) + 1} <span><FaArrowRight /></span></button>
    </div>
  )
}

export default VideoOption
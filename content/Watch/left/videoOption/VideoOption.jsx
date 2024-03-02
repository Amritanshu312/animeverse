import styles from "./videoOption.module.css"
import { FaArrowLeft } from "react-icons/fa6";
import { IoBookmark } from "react-icons/io5";
import { FaArrowRight, FaCommentAlt } from "react-icons/fa";

const VideoOption = () => {
  return (
    <div className={styles.container}>
      <button><span><FaArrowLeft /> Prev:</span>Episode 1</button>
      <button><IoBookmark /> Bookmark</button>
      <button>View Details</button>
      <button><FaCommentAlt /> Comments (45)</button>
      <button><span>Next:</span>Episode 1 <span><FaArrowRight /></span></button>
    </div>
  )
}

export default VideoOption
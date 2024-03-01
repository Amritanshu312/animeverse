import styles from "./videoSelector.module.css"
import { FaCirclePlay } from "react-icons/fa6";

const VideoSelector = () => {
  return (
    <>
      <div className={styles.identifier}>
        <FaCirclePlay />
        Select Video Quality or Download it
      </div>

      <div className={styles.selector}>
        <button>360p</button>
        <button>480p</button>
        <button>720p</button>
        <button>1080p</button>
        <button>Download</button>
      </div>
    </>
  )
}

export default VideoSelector
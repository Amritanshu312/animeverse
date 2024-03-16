import Image from "next/image"
import styles from "./banner.module.css"
import AnimeInfo from "./AnimeInfo/AnimeInfo"
import { useState } from "react"
import VideoPlay from "./videoPlay/VideoPlay"

const Banner = ({ info }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const HoverTime = 1000
  let hoverTimer = null;

  const onMouseEnter = () => {
    if (!isVideoPlaying && window.innerWidth >= 890) {
      hoverTimer = setTimeout(() => {
        setIsVideoPlaying(true);
      }, HoverTime);
    }
  }

  const onMouseLeave = () => {
    clearTimeout(hoverTimer); // Cancel the timeout if mouse leaves before HoverTime
    setIsVideoPlaying(false);
  }

  return (
    <div className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.bannerImage}>
        {!isVideoPlaying || !info?.video || !isImageLoaded ? <Image src={info.image} alt="banner" width={1000} height={396} onLoad={() => setIsImageLoaded(true)} /> : null}
        {info?.video && isVideoPlaying ? <VideoPlay url={info?.video} play={isVideoPlaying} display={info?.video && isVideoPlaying} /> : null}
      </div>

      <AnimeInfo info={info} />
    </div >
  )
}

export default Banner

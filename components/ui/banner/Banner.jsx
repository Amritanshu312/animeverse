"use client"
import Image from "next/image"
import styles from "./banner.module.css"
import AnimeInfo from "./AnimeInfo/AnimeInfo"
import { useState } from "react"
import VideoPlay from "./videoPlay/VideoPlay"
import { Suspense } from 'react'

const Banner = ({ info }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const HoverTime = 500

  const onMouseEnter = () => {
    if (!isVideoPlaying && window.innerWidth >= 890) {
      setTimeout(() => {
        setIsVideoPlaying(true)
      }, !isVideoPlaying ? HoverTime : 0);
    }
  }
  const onMouseLeave = () => {
    setIsVideoPlaying(false)
  }
  return (
    <div className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.bannerImage}>
        {!isVideoPlaying || !info?.video || !isImageLoaded ? <Image src={info.image} alt="banner" width={1000} height={396} onLoad={() => setIsImageLoaded(true)} /> : null}
        {info?.video && isVideoPlaying ? <VideoPlay url="https://firebasestorage.googleapis.com/v0/b/anime-nsfw.appspot.com/o/edits%2Fdemon%20slayer%20edit%20(2).mp4?alt=media&token=dd51ecd4-2dcd-4ce8-b783-3612aea528f6" play={isVideoPlaying} /> : null}
      </div>

      <AnimeInfo info={info} />
    </div >
  )
}

export default Banner
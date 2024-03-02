/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import AnimeInfo from "@/content/Watch/left/animeInfo/AnimeInfo"
import VideoPlayer from "@/content/Watch/left/videoPlayer/VideoPlayer"
import styles from "./watch.module.css"
import VideoOption from "@/content/Watch/left/videoOption/VideoOption"
import VideoSelector from "@/content/Watch/left/videoSelector/VideoSelector"
import EpisodeSelector from "@/content/Watch/left/episodeSelector/EpisodeSelector"
import MostPopular from "@/content/Watch/right/mostPopular/MostPopular"
import Recommendation from "@/content/Watch/right/recommendation/Recommendation"
import AtoZalphabet from "@/components/ui/AtoZalphabet/AtoZalphabet"
import { useEffect, useState } from "react"
import { fetchData } from "@/lib/FetchData"
import Loading from "@/components/layout/loading/Loading"
import { useSearchParams } from "next/navigation"

const Watch = ({ params }) => {
  const { id } = params
  const searchParams = useSearchParams()

  const [animeInfo, setAnimeInfo] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [episode, setEpisode] = useState(searchParams.get('episode') || 1)
  const [watch, setWatch] = useState({})
  const [videoSelected, setVideoSelected] = useState("default")

  useEffect(() => {
    const fetchAnimeInfo = async () => {
      setIsLoaded(false)
      let data = await fetchData(`/meta/anilist/data/${id}`)
      setAnimeInfo(data.data)
      if (data.ok) {
        setIsLoaded(true)
      }
    }

    const fetchVideos = async () => {
      const data = await fetchData(`/meta/anilist/watch/${searchParams.get('episodeID')}`)
      if (data.ok) {
        setWatch(data.data)
      }
    }
    fetchVideos()
    fetchAnimeInfo()
  }, [])

  return !isLoaded ? <Loading /> : (
    <>
      <AnimeInfo info={animeInfo} episode={episode} />
      <div className={styles.container}>
        <div className={styles.left}>
          <VideoPlayer data={{ watch, videoSelected, cover: animeInfo?.cover }} />
          <VideoOption />
          <VideoSelector />
          <EpisodeSelector />
        </div>
        <div className={styles.right}>
          {/* <Recommendation /> */}
          <MostPopular />
        </div>
      </div>

      <AtoZalphabet />
    </>
  )
}

export default Watch
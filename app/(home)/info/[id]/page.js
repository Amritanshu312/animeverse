/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Image from "next/image"
import styles from "./info.module.css"
import AnimeInfo from "@/content/Info/animeInfo/AnimeInfo"
import Recommendation from "@/content/Watch/right/recommendation/Recommendation"
import MostPopular from "@/content/Watch/right/mostPopular/MostPopular"
import { useEffect, useState } from "react"
import { fetchData } from "@/lib/FetchData"
import Loading from "@/components/layout/loading/Loading"
import AtoZalphabet from "@/components/ui/AtoZalphabet/AtoZalphabet"

const Info = ({ params }) => {
  const { id } = params
  const [animeInfo, setAnimeInfo] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  console.log(animeInfo);

  useEffect(() => {
    const fetchAnimeInfo = async () => {
      setIsLoaded(false)
      let data = await fetchData(`/meta/anilist/data/${id}`)
      setAnimeInfo(data.data)
      document.title = `Animeverse - ${data.data.title.english}`;
      if (data.ok) {
        setIsLoaded(true)
      }
    }
    fetchAnimeInfo()
  }, [])

  return !isLoaded ? <Loading /> : (
    <>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/banner/Stronger than ever.jpeg"
          alt="background"
          fill
        />
      </div>

      <div className={styles.container}>
        <AnimeInfo info={animeInfo} />
        <div style={{ marginLeft: "2rem" }} className={styles.showanotheranime}>
          <Recommendation data={animeInfo.recommendations.slice(0, 5)} />
          <MostPopular />
        </div>
      </div >

      <AtoZalphabet />
    </>
  )
}

export default Info

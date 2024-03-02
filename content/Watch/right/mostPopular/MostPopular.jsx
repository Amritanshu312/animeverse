"use client"

import Image from "next/image";
import styles from "./mostPopular.module.css"
import { IoMdPricetag as TagIcon } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/FetchData";

const MostPopular = () => {
  const [popularSeries, setPopularSeries] = useState([])

  useEffect(() => {
    const fetchPopularAnimes = async () => {
      const data = await fetchData(`/meta/anilist/trending?perPage=5`)

      if (data.ok) {
        setPopularSeries(data.data)
      }
    }

    fetchPopularAnimes()
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.icon}><TagIcon /></div>
        Top Airing Series
      </div>

      <div className={styles.serieslist}>
        {popularSeries.results?.map((data, index) => (

          <Link href={`/info/${data.id}`} className={styles.series} key={index}>
            <div className={styles.number}>{index + 1}</div>
            <div className={styles.image}>
              <Image src={data.image} alt="banner" width={100} height={150} />
            </div>

            <div className={styles.info}>
              <div className={styles.title}>{data?.title?.english}</div>
              <div className={styles.rating}><BiSolidLike /> {data.rating * 10 / 100} Rating</div>
              <div className={styles.episodes}><BsStack /> {data?.totalEpisodes} Episodes</div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default MostPopular
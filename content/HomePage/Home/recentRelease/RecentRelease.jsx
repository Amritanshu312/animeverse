"use client"

import { useEffect, useState } from "react"
import styles from "./recentRelease.module.css"
import RecentReleasesCard from "@/components/ui/recentReleaseCard/RecentReleasesCard"
import { fetchData } from "@/lib/FetchData"

const RecentRelease = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [datas, setDatas] = useState(null)
  const [page, setPage] = useState(1)


  useEffect(() => {
    setIsLoaded(false)
    fetchData(`/meta/anilist/advanced-search?status=RELEASING&page=${page}&perPage=10`).then(data => {
      {
        datas === null ? setDatas(data.data) : setDatas({
          ...datas,
          ...data.data,
          results: [...datas?.results, ...data.data?.results],
          totalResults: datas?.totalResults + data.data?.totalResults
        })
      }

    }).finally(() => setIsLoaded(true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <section className={styles.container}>
      <div className={styles.recentReleaseContainer}>
        <div className={styles.title}>
          <p>Recent Episode Releases</p>
          <p>Explore And Find Best Anime!</p>
        </div>

        <div className={styles.cards}>

          {!isLoaded ? Array.from({ length: 10 * page }).map((_, index) => <RecentReleasesCard key={index} isLoading />) : datas?.results?.map((data, index) => (
            <RecentReleasesCard key={index} info={data}/>
          ))}
        </div>

        <button className={styles.showMoreBtn} onClick={() => datas.hasNextPage && setPage(prev => prev + 1)}>Show More</button>
      </div>

    </section>
  )
}

export default RecentRelease
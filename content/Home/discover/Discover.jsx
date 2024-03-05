"use client"
import Card from "@/components/ui/card/Card"
import styles from "./discover.module.css"
import Options from "./options/Options"
import { useEffect, useState } from "react"
import { fetchData } from "@/lib/FetchData"
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from "react-icons/io";

const Discover = () => {
  const [datas, setDatas] = useState([])
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("Trending")
  const [isLoaded, setIsLoaded] = useState(false)
  

  useEffect(() => {
    setIsLoaded(false)
    if (category === "Trending") {
      fetchData(`/meta/anilist/trending?page=${page}&perPage=8`).then(data => setDatas(data.data)).finally(() => setIsLoaded(true))
    }
    else {
      fetchData(`/meta/anilist/advanced-search?genres=["${category}"]&page=${page}`).then(data => setDatas(data.data)).finally(() => setIsLoaded(true))
    }
  }, [page, category])


  return (
    <section className={styles.container}>
      <div className={styles.discoverContainer}>
        <div className={styles.title}>
          <p>Discover Best Anime</p>
          <p>Explore Our Hottest Categories!</p>
        </div>

        <Options categoryselector={{ setCategory, category }} />

        <div className={styles.pagitation}>
          <button onClick={() => datas.currentPage >= 1 ? setPage(prev => prev - 1) : null}><LeftArrow /></button>
          <button onClick={() => datas.hasNextPage ? setPage(prev => prev + 1) : null} className={styles.active}><RightArrow /></button>
        </div>

        <div className={styles.cards}>

          {!isLoaded ? Array.from({ length: 8 }).map((_, index) => <Card key={index} isLoading={true} />) : datas?.results?.map((data, index) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Discover
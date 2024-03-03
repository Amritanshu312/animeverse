"use client"

import styles from "./episodeSelector.module.css"
import { BsStack } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { useCallback, useEffect, useState } from "react";
import { fetchData } from "@/lib/FetchData";
import { useRouter } from "next/navigation";

const EpisodeSelector = ({ id, title }) => {
  const router = useRouter()

  const [episodes, setEpisodes] = useState([])
  const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchEpisodes = async () => {
      let data = await fetchData(`/meta/anilist/episodes/${id}`)

      if (data.ok) {
        setEpisodes(data.data)
        setFilteredEpisodes(data.data)
      }
    }
    fetchEpisodes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams();
      params.set(name, value);
      return params.toString();
    },
    []
  )



  useEffect(() => {
    const filter = episodes.filter((item) => item.number.toString().toLowerCase().includes(search.toLowerCase()))
    setFilteredEpisodes(filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])


  return (
    <>
      <div className={styles.identifier}><BsStack /> {title?.english} Episodes</div>

      <div className={styles.searchEp}>
        <IoSearch />
        <input type="text" placeholder="Search episode" onChange={e => setSearch(e.target.value)} value={search} />
      </div>

      {episodes.length !== 0 ?
        <div className={styles.episodes} >
          {filteredEpisodes.map((item, index) =>
            <div onClick={() => router.push(`/watch/${id}?${createQueryString('episodeID', item.id)}&${createQueryString('episode', item.number)}`)} className={styles.episode} key={index}>
              <span>Episode {item.number}</span>
              <span>{item.airDate || "Unknown"}</span>
            </div>)}
        </div >
        : <div className={styles.loadingepisode}></div>
      }
    </>
  )
}

export default EpisodeSelector
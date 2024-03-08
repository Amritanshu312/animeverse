"use client"

import { useCallback, useEffect, useState } from "react";
import styles from "./episodeSelector.module.css"
import { BsStack } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";
import useSWR from 'swr'

const EpisodeSelector = ({ episode, activeEpisdoe, setVideoOptionToggler }) => {
  const router = useRouter()
  const [language, setLanguage] = useState("sub")

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams();
      params.set(name, value);
      return params.toString();
    },
    []
  )


  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data: episodes, isLoading } = useSWR(`${process.env.API_URL}/meta/anilist/episodes/${episode}?dub=${language === "dub"}`, fetcher)
  const [search, setSearch] = useState("");

  const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);


  useEffect(() => setFilteredEpisodes(episodes?.filter((item) => item?.number?.toString()?.toLowerCase().includes(search?.toLowerCase()))), [episodes, search])

  useEffect(() => {
    const filter = episodes?.filter((item) => item.number.toString().toLowerCase().includes(search?.toLowerCase()))
    setFilteredEpisodes(filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  useEffect(() => {
    if (!episodes) {
      return
    }
    const foundIndex = episodes.findIndex(item => item.number === parseInt(activeEpisdoe));
    if (foundIndex !== -1) {
      const prevEpisode = foundIndex > 0 ? episodes[foundIndex - 1] : null;
      const currentEpisode = episodes[foundIndex];
      const nextEpisode = foundIndex < episodes.length - 1 ? episodes[foundIndex + 1] : null;
      const episodeList = [prevEpisode, currentEpisode, nextEpisode];
      setVideoOptionToggler(episodeList)
    } else {
      console.log("Episode not found.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeEpisdoe, episodes]);



  return (
    <>
      <div className={styles.identifier}>
        <BsStack />
        Select Episodes
      </div>

      <div className={styles.episodecontainer}>
        <div className={styles.searchEp}>
          <IoIosSearch />
          <input type="text" placeholder="search..." onChange={e => setSearch(e.target.value)} value={search} />
        </div>

        <div className={styles.selection}>
          <button onClick={() => setLanguage("dub")} className={language === "dub" ? styles.active : ""}>Dub</button>
          <button onClick={() => setLanguage("sub")} className={language !== "dub" ? styles.active : ""}>Sub</button>
        </div>
      </div>

      {isLoading ? <div className={`${styles.episodes} ${styles.loading}`}></div> :

        <div className={styles.episodes}>
          {filteredEpisodes?.map((item, index) =>
            <div onClick={() => router.push('/watch/' + episode + '?' + createQueryString('episodeID', item.id) + '&' + createQueryString('episode', item.number))} className={`${styles.episode} ${activeEpisdoe === item.number.toString() && styles.watched}`} key={index}>
              <span>Episode {item?.number}</span>
              <span>{item.airDate || "Unknown"}</span>
            </div>)}

          {episodes.length === 0 ? <div className={styles.episode}>
            <span style={{ fontSize: "1.4rem" }}>No {language}bed episodes found</span>
          </div> : null}
        </div>

      }
    </>
  )
}

export default EpisodeSelector

import { useCallback, useEffect, useState } from "react";
import styles from "./episodeSelector.module.css"
import { BsStack } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

const EpisodeSelector = ({ episodes, episode }) => {
  const router = useRouter()


  const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);
  const [search, setSearch] = useState("");


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
      <div className={styles.identifier}>
        <BsStack />
        Select Episodes
      </div>

      <div className={styles.searchEp}>
        <IoIosSearch />
        <input type="text" placeholder="search..." onChange={e => setSearch(e.target.value)} value={search} />
      </div>

      <div className={styles.episodes} >
        {filteredEpisodes.map((item, index) =>
          <div onClick={() => router.replace('?' + createQueryString('episodeID', item.id) + '&' + createQueryString('episode', item.number))} className={`${styles.episode} ${episode === item.number.toString() && styles.watched}`} key={index}>
            <span>Episode {item.number}</span>
            <span>{item.airDate || "Unknown"}</span>
          </div>)}
      </div>
    </>
  )
}

export default EpisodeSelector

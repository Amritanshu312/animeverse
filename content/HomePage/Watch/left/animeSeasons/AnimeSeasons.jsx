"use client"

import styles from "./animeSeasons.module.css"
import { FaSwatchbook } from "react-icons/fa6";
import SeasonSelectorCard from "./card/SeasonSelectorCard";
import { Fragment } from "react";

const AnimeSeasons = ({ data }) => {
  console.log(data);
  const [page, setPage] = useState(1)
  const [datas, setDatas] = useState([])

  useEffect(() => {
    const chunkSize = 4;
    for (let i = 0; i < a.length; i += chunkSize) {
      const chunk = a.slice(i, i + chunkSize);
      setDatas(chunk)
    }
  }, [page])
  return (
    <>
      <div className={styles.identifier}>
        <FaSwatchbook />
        Other Seasons
      </div>


      <div className={styles.container}>
        {data.map((items, index) => (
          <Fragment key={index}>
            {items.type !== "MANGA" && items.relationType !== "OTHER" && <SeasonSelectorCard info={items} />}
          </Fragment>
        ))}
      </div>
    </>
  )
}

export default AnimeSeasons
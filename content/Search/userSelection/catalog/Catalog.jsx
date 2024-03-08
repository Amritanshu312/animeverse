"use client"

import { useState } from "react";
import Type from "./Type/Type";
import styles from "./catalog.module.css"
import Genres from "./genres/Genres";
import Season from "./season/Season";
import Status from "./status/Status";
import Year from "./year/Year";
import { useRouter, useSearchParams } from "next/navigation";

const Catalog = () => {
  const param = useSearchParams()
  const router = useRouter()

  const [searchData, setSearchData] = useState({
    genres: param.get("genres") || [],
    status: param.get("status") || "",
    season: param.get("season") || "",
    type: param.get("type") || "",
    year: param.get("year") || new Date().getFullYear(),
  })


  const FilterClick = () => {
    const searchDataString = Object.keys(searchData)
      .map(k => {
        if (k === 'genres') {
          return searchData[k].length ? encodeURIComponent(k) + '=' + encodeURIComponent(JSON.stringify(searchData[k])) : null;
        } else {
          return searchData[k] !== "" ? encodeURIComponent(k) + '=' + encodeURIComponent(searchData[k]) : null;
        }
      })
      .filter(Boolean) // Filter out null values
      .join('&');

    router.push(`/search?${searchDataString}`);
  }



  return (
    <div className={styles.container}>
      <div className={styles.title}>Catalog</div>

      {/* year  */}
      <Year callback={{ searchData, setSearchData }} />
      {/* season */}
      <Status callback={{ searchData, setSearchData }} />
      <Season callback={{ searchData, setSearchData }} />
      <Type callback={{ searchData, setSearchData }} />
      <Genres callback={{ searchData, setSearchData }} />

      <button className={styles.apply} onClick={FilterClick}>Apply</button>

    </div>
  )
}

export default Catalog
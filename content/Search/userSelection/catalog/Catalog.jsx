"use client"

import { useState } from "react";
import Type from "./Type/Type";
import styles from "./catalog.module.css"
import Genres from "./genres/Genres";
import Season from "./season/Season";
import Status from "./status/Status";
import Year from "./year/Year";

const Catalog = () => {
  const [searchData, setSearchData] = useState({
    year: new Date().getFullYear(),
    status: "",
    season: "",
    type: "",
    genres: [],
  })

  


  console.log(searchData);
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

      <button className={styles.apply}>Apply</button>

    </div>
  )
}

export default Catalog
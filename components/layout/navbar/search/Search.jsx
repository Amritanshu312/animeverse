"use client"

import { useState } from "react";
import styles from "./search.module.css"
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Search = () => {
  const [isSearchToggled, setIsSearchToggled] = useState(false)
  const [searchText, setSearchText] = useState("")
  const router = useRouter()
  return (
    <>
      {
        isSearchToggled ?
          <div className={`${styles.searchcontainer} ${styles.isShow}`}>
            <input type="text" className={styles.searchInput} placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          </div> : null
      }

      <div className={styles.searchDisplay}>
        <div className={`${styles.searchcontainer} ${styles.searchcontainerResponsive}`}>
          <input type="text" className={styles.searchInput} placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <button className={styles.DISsearch} onClick={() => searchText !== "" ? router.push(`/search/${searchText}`) : setIsSearchToggled(prev => !prev)}><IoSearch /></button>
      </div>

      <button className={styles.search} onClick={() => searchText !== "" ? router.push(`/search/${searchText}`) : setIsSearchToggled(prev => !prev)}><IoSearch /></button>
    </>
  )
}

export default Search
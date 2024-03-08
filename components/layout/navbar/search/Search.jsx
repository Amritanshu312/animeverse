"use client"

import { useState } from "react";
import styles from "./search.module.css"
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Search = () => {
  const [isSearchToggled, setIsSearchToggled] = useState(false)
  const [searchText, setSearchText] = useState("")
  const router = useRouter()

  const onEnter = (e) => {
    if (e.key === "Enter") {
      if (searchText !== "") {
        router.push(`/search?q=${searchText}`)
      }
    }
  }

  return (
    <>
      {
        isSearchToggled ?
          <div className={`${styles.searchcontainer} ${styles.isShow}`}>
            <input type="text" className={styles.searchInput} placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={onEnter} />
          </div> : null
      }

      <div className={styles.searchDisplay}>
        <div className={`${styles.searchcontainer} ${styles.searchcontainerResponsive}`}>
          <input type="text" className={styles.searchInput} placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={onEnter} />
        </div>
        <button className={styles.DISsearch} onClick={() => searchText !== "" ? router.push(`/search?q=${searchText}`) : setIsSearchToggled(prev => !prev)}><IoSearch /></button>
      </div>

      <button className={styles.search} onClick={() => searchText !== "" ? router.push(`/search?q=${searchText}`) : setIsSearchToggled(prev => !prev)}><IoSearch /></button>
    </>
  )
}

export default Search
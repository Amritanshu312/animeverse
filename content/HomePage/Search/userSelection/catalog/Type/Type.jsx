"use client"
import { useState } from "react";
import { FaRegSquare, FaSquareCheck } from "react-icons/fa6";
import styles from "../season/season.module.css"

const Type = ({ callback }) => {
  const types = ["TV", "TV_SHORT", "OVA", "ONA", "MOVIE", "SPECIAL", "MUSIC"]
  const { searchData, setSearchData } = callback

  const handleClick = (selected) => {
    if (selected === searchData.type) {
      setSearchData({ ...searchData, type: "" })
    }
    else {
      setSearchData({ ...searchData, type: selected })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Type</div>
      <div className={styles.options}>
        {types.map((type, index) => (
          <div className={`${styles.select} ${searchData.type === type ? styles.active : null}`} key={index} onClick={() => handleClick(type)}>{searchData.type === type ? <FaSquareCheck /> : <FaRegSquare />} {type}</div>
        ))}
      </div>
    </div>
  )
}

export default Type
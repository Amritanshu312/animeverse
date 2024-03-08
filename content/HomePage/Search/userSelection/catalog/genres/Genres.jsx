"use client"

import { useState } from "react";
import styles from "./genres.module.css"
import { FaRegSquare, FaSquareCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion"

const Genres = ({ callback }) => {
  const genres = ["Action", "Adventure", "Cars", "Comedy", "Drama", "Fantasy", "Horror", "Mahou Shoujo", "Mecha", "Music", "Mystery", "Psychological", "Romance", "Sci-Fi", "Slice of Life", "Sports", "Supernatural", "Thriller"]
  const [viewAll, setViewAll] = useState(false)

  const { searchData, setSearchData } = callback

  const onHandleSelect = (itemSelected) => {
    if (!searchData.genres.includes(itemSelected)) {
      setSearchData({ ...searchData, genres: [...searchData.genres, itemSelected] });
    } else {
      setSearchData({ ...searchData, genres: searchData.genres.filter(item => item !== itemSelected) });
    }

  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.1 }
    }
  };

  const listItemTransition = {
    duration: 0.1,
    ease: "easeInOut"
  };


  return (
    <div className={styles.container}>
      <div className={styles.heading}>Genres</div>
      <motion.div className={styles.options} variants={containerVariants} initial="hidden" animate="show">
        {genres.slice(0, viewAll ? genres.length : 5).map((genre, index) => (
          <motion.div
            className={`${styles.select} ${searchData.genres.includes(genre) ? styles.active : null}`}
            key={index}
            onClick={() => onHandleSelect(genre)}
            variants={listItemVariants}
            transition={listItemTransition}
          >{searchData.genres.includes(genre) ? <FaSquareCheck /> : <FaRegSquare />} {genre}</motion.div>
        ))}

        <div className={styles.viewall} onClick={() => setViewAll(prev => !prev)}>View All <IoIosArrowDown /></div>
      </motion.div>
    </div>
  )
}

export default Genres
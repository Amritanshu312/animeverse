import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import styles from "./userSelection.module.css"

const UserSelection = () => {

  return (
    <div className={styles.searchInfo}>
      <div className={styles.title}>Welcome to Animeverse Search!</div>
      <div className={styles.search}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <button><IoIosSearch /></button>
      </div>

      {/* 
      <div className={styles.selectionArea}>
        <Option defaultOption={"genres"} items={["Action", "Comedy", "Drama", "Fantasy", "Psychological", "Romance", "Sci-Fi", "Thriller", "Slice of Life", "Supernatural"]} icon={<MdLocationSearching />} />
        <Option defaultOption={"genres"} items={["Action", "Comedy", "Drama", "Fantasy", "Psychological", "Romance", "Sci-Fi", "Thriller", "Slice of Life", "Supernatural"]} icon={<MdLocationSearching />} multipleSelection />
      </div> */}

    </div>
  )
}

export default UserSelection
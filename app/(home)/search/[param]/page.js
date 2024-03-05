import Image from 'next/image'
import styles from './search.module.css'
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { MdLocationSearching } from "react-icons/md";

const Search = () => {
  return (
    <>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/banner/Fearless and dark.jpeg"
          alt="background"
          quality={10}
          fill
        />

        <div className={styles.searchInfo}>
          <div className={styles.title}>Welcome to Animeverse Search!</div>
          <div className={styles.search}>
            <input type="text" placeholder="Search..." className={styles.searchInput} />
            <button><IoIosSearch /></button>
          </div>

          {/* <div className={styles.selectionArea}>
            <div className={styles.genres}>
              <div className={styles.left}>
                <MdLocationSearching />
                Season
              </div>
              <div className={styles.right}>Any <span><IoIosArrowDown /></span></div>
            </div>
            <div className={styles.genres}>
              <div className={styles.left}>
                <MdLocationSearching />
                Season
              </div>
              <div className={styles.right}>Any <span><IoIosArrowDown /></span></div>
            </div>
            <div className={styles.genres}>
              <div className={styles.left}>
                <MdLocationSearching />
                Season
              </div>
              <div className={styles.right}>Any <span><IoIosArrowDown /></span></div>
            </div>
          </div> */}

        </div>
      </div>
    </>
  )
}

export default Search
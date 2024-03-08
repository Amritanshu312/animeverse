import styles from "./season.module.css"
import { FaRegSquare, FaSquareCheck } from "react-icons/fa6";

const Season = ({ callback }) => {
  const seasons = ["Winter", "Spring", "Summer", "Fall"]
  const { searchData, setSearchData } = callback

  const handleClick = (selected) => {
    if (selected === searchData.season) {
      setSearchData({ ...searchData, season: "" })
    }
    else {
      setSearchData({ ...searchData, season: selected })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Season</div>
      <div className={styles.options}>
        {seasons.map((season, index) => (
          <div className={`${styles.select} ${searchData.season === season ? styles.active : null}`} key={index} onClick={() => handleClick(season)}>{searchData.season === season ? <FaSquareCheck /> : <FaRegSquare />} {season}</div>
        ))}
      </div>
    </div>
  )
}

export default Season
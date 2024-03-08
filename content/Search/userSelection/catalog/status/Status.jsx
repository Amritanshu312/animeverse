import { FaRegSquare, FaSquareCheck } from "react-icons/fa6";
import styles from "../season/season.module.css"

const Status = ({ callback }) => {
  const status = ["RELEASING", "NOT_YET_RELEASED", "FINISHED", "CANCELLED", "HIATUS"]
  const { searchData, setSearchData } = callback

  const handleClick = (selected) => {
    if (selected === searchData.status) {
      setSearchData({ ...searchData, status: "" })
    }
    else {
      setSearchData({ ...searchData, status: selected })
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Status</div>
      <div className={styles.options}>
        {status.map((status, index) => (
          <div className={`${styles.select} ${searchData.status === status ? styles.active : null}`} key={index} onClick={() => handleClick(status)}>{searchData.status === status ? <FaSquareCheck /> : <FaRegSquare />} {status}</div>
        ))}
      </div>
    </div>
  )
}

export default Status
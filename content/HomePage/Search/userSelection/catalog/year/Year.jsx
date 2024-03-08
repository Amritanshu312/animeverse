import { useEffect, useState } from "react";
import styles from "./year.module.css"
import { MdOutlineClose } from "react-icons/md";

const Year = ({ callback }) => {
  const { searchData, setSearchData } = callback
  const [isYearOff, setIsYearOff] = useState(false)

  useEffect(() => {
    if (isYearOff === false) {
      setSearchData({ ...searchData, year: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isYearOff])

  const checkYear = (value) => {
    const year = parseInt(value);
    if (isYearOff) {
      if (!isNaN(year)) {
        const currentYear = new Date().getFullYear();
        if (year >= 1900 && year <= currentYear) {
          setSearchData({ ...searchData, year });
        }
      } else {
        console.error("Please enter a year between 1900 and the current year.");
      }
    } else {
      console.error("Invalid year input.");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span>Year</span>
        {isYearOff ?
          <span className={styles.yearSelected} onClick={() => setIsYearOff(false)}>{searchData.year} <MdOutlineClose /></span>
          : null
        }
      </div>
      <div className={styles.options}>
        <input type="number" value={searchData.year === "" ? 2024 : searchData.year} onChange={e => checkYear(e.target.value)} onClick={() => setIsYearOff(true)} />
      </div>
    </div>
  )
}

export default Year
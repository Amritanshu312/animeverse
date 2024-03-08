import styles from "./year.module.css"

const Year = ({ callback }) => {
  const { searchData, setSearchData } = callback

  const checkYear = (value) => {
    const year = parseInt(value);
    if (!isNaN(year)) {
      const currentYear = new Date().getFullYear();
      if (year >= 1900 && year <= currentYear) {
        setSearchData({ ...searchData, year });
      } else {
        console.error("Please enter a year between 1900 and the current year.");
      }
    } else {
      console.error("Invalid year input.");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Year</div>
      <div className={styles.options}>
        <input type="number" value={searchData.year} onChange={e => checkYear(e.target.value)} />
      </div>
    </div>
  )
}

export default Year
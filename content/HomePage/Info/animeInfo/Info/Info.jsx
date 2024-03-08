import styles from "./Info.module.css"

const Info = ({ data }) => {
  const { status, studios, season, duration, type, startDate } = data
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div>Type</div>
        <div>{type}</div>
      </div>
      <div className={styles.list}>
        <div>Studio</div>
        <div>{studios[0]}</div>
      </div>
      <div className={styles.list}>
        <div>Published</div>
        <div>{months[startDate?.month]} {startDate?.day}, {startDate?.year}</div>
      </div>
      <div className={styles.list}>
        <div>duration</div>
        <div>{duration} min</div>
      </div>
      <div className={styles.list}>
        <div>Status</div>
        <div>{status}</div>
      </div>
      <div className={styles.list}>
        <div>Season</div>
        <div>{season}</div>
      </div>
    </div>
  )
}

export default Info
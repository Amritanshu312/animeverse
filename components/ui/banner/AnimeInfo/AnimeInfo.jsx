import Link from "next/link"
import styles from "./AnimeInfo.module.css"

const AnimeInfo = ({ info }) => {
  const { name, description, type, genre, id } = info
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.description}>{description}</p>

      <div className={styles.animedetail}>
        <div className={styles.type}>
          Type: <Link href="/type/comic">{type}</Link>
        </div>
        <div className={styles.genre}>
          Genre: <span>
            {genre.map((genre, index) => <Link style={{ textDecoration: "none", color: "inherit" }} key={index} href={`/genre/${genre}`}>{genre}</Link>)}
          </span>
        </div>
      </div>

      <Link href={`info/${id}`} className={styles.watch}>Watch Now</Link>
    </div>
  )
}

export default AnimeInfo
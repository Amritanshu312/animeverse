import styles from "./options.module.css"

const Options = ({ categoryselector }) => {
  const { setCategory, category } = categoryselector
  const genreList = ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Romance", "Sci-Fi", "Shounen", "Slice of Life", "Supernatural"]
  return (
    <div className={styles.options}>
      <div className={styles.items}>

        <button className={`${styles.button} ${styles.active}`}>Trending Series</button>
        {genreList.map((genre) => (
          <button key={genre} className={`${styles.button}`} onClick={() => setCategory(genre)}>{genre}</button>
        ))}
      </div>
    </div>
  )
}

export default Options
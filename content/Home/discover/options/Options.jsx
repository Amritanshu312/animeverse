import styles from "./options.module.css"

const Options = ({ categoryselector }) => {
  const { setCategory, category } = categoryselector
  const genreList = ["Action", "Comedy", "Drama", "Fantasy", "Psychological", "Romance", "Sci-Fi", "Thriller", "Slice of Life", "Supernatural"]
  return (
    <div className={styles.options}>
      <div className={styles.items}>

        <button className={`${styles.button} ${category === "Trending" ? styles.active : null}`} onClick={() => setCategory("Trending")}>Trending Series</button>
        {genreList.map((genre) => (
          <button key={genre} className={`${styles.button} ${category === genre ? styles.active : null}`} onClick={() => setCategory(genre)}>{genre}</button>
        ))}
      </div>
    </div>
  )
}

export default Options
import styles from "./AtoZalphabet.module.css"

const AtoZalphabet = () => {
  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  return (
    <div className={styles.container}>
      <div className={styles.logo}>A-Z</div>

      <div className={styles.title}>Dive Deep! Explore Animes A to Z Alphabetically.</div>
      <div className={styles.description}>
        Discover your next favorite Anime series, all organized alphabetically. Explore a vast collection of genres and discover hidden gems.
      </div>

      <div className={styles.letters}>
        {alphabets.map((letter, index) => (
          <div className={styles.letter} key={index}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AtoZalphabet
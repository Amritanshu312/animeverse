import styles from "./error.module.css"

const __Error = () => {
  return (
    <section className={`container ${styles.error}`}>
      <h1>404</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea sunt iure animi repellat cum sit totam at ab. Sed harum asperiores quo quasi impedit, nam quis reprehenderit molestiae deserunt necessitatibus esse, officiis id non? Pariatur repellendus temporibus, itaque recusandae aspernatur voluptatibus quaerat suscipit animi atque ad, amet magnam. Aut officia a qui doloremque facere molestias.</p>
      <button>Go Back</button>
    </section>
  )
}

export default __Error
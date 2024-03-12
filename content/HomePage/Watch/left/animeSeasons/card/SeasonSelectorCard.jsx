import Image from "next/image"
import styles from "./card.module.css"

const SeasonSelectorCard = ({ info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={info.image} alt="background" fill />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>{info.title.english || info.title.userPreferred}</div>
      </div>
    </div>
  )
}

export default SeasonSelectorCard
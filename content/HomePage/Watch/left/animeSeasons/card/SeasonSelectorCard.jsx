import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

const SeasonSelectorCard = ({ info }) => {
  return (
    <Link href={`/info/${info.id}`} className={styles.container}>
      <div className={styles.image}>
        <Image src={info.image} alt="background" width={200} height={200} />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>{info.title.english || info.title.userPreferred}</div>
      </div>
    </Link>
  )
}

export default SeasonSelectorCard
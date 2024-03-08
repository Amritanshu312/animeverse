import Image from "next/image";
import styles from "../mostPopular/mostPopular.module.css"
import { IoIosRocket as TagIcon } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import Link from "next/link";

const Recommendation = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.icon}><TagIcon /></div>
        Recommended Anime Series
      </div>

      <div className={styles.serieslist}>
        {data.map((items, index) => (
          <Link href={`/info/${items.id}`} className={styles.series} key={index}>
            <div className={styles.number}>{index + 1}</div>
            <div className={styles.image}>
              <Image src={items.image} alt="card image" width={100} height={150} />
            </div>

            <div className={styles.info}>
              <div className={styles.title}>{items.title?.english}</div>
              <div className={styles.rating}><BiSolidLike /> {items.rating * 10 / 100} Rating</div>
              <div className={styles.episodes}><BsStack /> {items?.episodes} Episodes</div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default Recommendation
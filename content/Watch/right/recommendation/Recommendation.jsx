import Image from "next/image";
import styles from "../mostPopular/mostPopular.module.css"
import { IoIosRocket as TagIcon } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import Link from "next/link";

const Recommendation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.icon}><TagIcon /></div>
        Recommended Anime Series
      </div>

      <div className={styles.serieslist}>
        {Array.from({ length: 1 }).map((_, index) => (

          <Link href={`watch/4`} className={styles.series} key={index}>
            <div className={styles.number}>{index + 1}</div>
            <div className={styles.image}>
              <Image src="/images/banner/Stronger than ever.jpeg" alt="banner" width={100} height={150} />
            </div>

            <div className={styles.info}>
              <div className={styles.title}>Solo Leveling Solo Leveling Solo Leveling</div>
              <div className={styles.rating}><BiSolidLike /> 8.5 Rating</div>
              <div className={styles.episodes}><BsStack /> 12 Episodes</div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default Recommendation
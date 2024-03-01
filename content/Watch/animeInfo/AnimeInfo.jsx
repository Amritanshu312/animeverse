import Image from "next/image"
import styles from "./animeInfo.module.css"
import { FaHouse as HomeIcon } from "react-icons/fa6";
import { FaAngleRight as RightArrow } from "react-icons/fa6";
import Link from "next/link";

const AnimeInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/banner/Stronger than ever.jpeg"
          alt="background"
          fill
        />
      </div>

      <div className={styles.info}>
        <div className={styles.pagination}>
          <Link href="/"><HomeIcon /> HomePage</Link>
          <RightArrow /><Link href="/Watch/SoloLeveling">Solo Leveling</Link>
          <Link href="/Watch/SoloLeveling/SoloLevelingEpisode1" className={styles.ep}><RightArrow /> Solo Leveling Episode 1</Link>
        </div>

        <div className={styles.title}>
          Solo Leveling: Episode 1
        </div>

        <div className={styles.notification}>Solo Leveling is now available on <span>MangaGrok</span>. Don&apos;t forgot to explore our other manga series as well!</div>
      </div>
    </div>
  )
}

export default AnimeInfo
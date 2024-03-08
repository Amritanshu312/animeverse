import Image from "next/image"
import styles from "./animeInfo.module.css"
import { FaHouse as HomeIcon } from "react-icons/fa6";
import { FaAngleRight as RightArrow } from "react-icons/fa6";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const AnimeInfo = ({ info, episode }) => {
  const { title, id } = info
  const episodeNo = useSearchParams().get('episode')
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image
          src={"/images/banner/Stronger than ever.jpeg"}
          alt="background"
          fill
        />
      </div>

      <div className={styles.info}>
        <div className={styles.pagination}>
          <Link href="/"><HomeIcon /> HomePage</Link>
          <RightArrow /><Link href={`/info/${id}`}>{title?.english}</Link>
          <Link href="#" className={styles.ep}><RightArrow /> {title?.english} Episode {episodeNo}</Link>
        </div>

        <div className={styles.title}>
          {title?.english}: Episode {episode}
        </div>

        <div className={styles.notification}>Read This anime and mangas on <span>MangaGrok</span>. Don&apos;t forgot to explore our other manga series as well!</div>
      </div>
    </div>
  )
}

export default AnimeInfo
import Image from "next/image"
import styles from "./animeInfo.module.css"
import Link from "next/link"
import { FaHouse as HomeIcon } from "react-icons/fa6";
import { FaAngleRight as RightArrow } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import Info from "./Info/Info";
import EpisodeSelector from "./episodeSelector/EpisodeSelector";

const AnimeInfo = ({ info }) => {
  const {
    id,
    title,
    image,
    description,
    status,
    episodes,
    duration,
    genres,
    studios,
    startDate,
    season,
    type
  } = info
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={image} alt="background" height={420} width={280} />

        <button>Write a review</button>

        <Info data={{ status, studios, season, duration, type, startDate }} />
      </div>

      <div className={styles.right}>
        <div className={styles.pagination}>
          <Link href="/"><HomeIcon /> HomePage</Link>
          <RightArrow /><Link href="#">{title?.english}</Link>
        </div>

        <div className={styles.title}>{title?.english}</div>

        <div className={styles.options}>
          <div className={styles.bookmark}><FaBookmark /></div>

          <div className={styles.genres}>
            {genres?.map((genre) => (
              <Link href={`/genres/${genre}`} key={genre}>{genre}</Link>
            ))}
          </div>
        </div>

        <div className={styles.description}>
          <span dangerouslySetInnerHTML={{ __html: description }} />
          {/* <span>Read More</span> */}
        </div>

        <EpisodeSelector episodes={episodes} title={title} id={id} />
      </div>
    </div>
  )
}

export default AnimeInfo
import Image from "next/image"
import styles from "./card.module.css"
import loadingStyles from "./loading.module.css"
import { FaBookmark } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

const Card = ({ hasborder = false, isLoading = false, data }) => {
  if (isLoading) {
    return <div className={loadingStyles.loading}></div>
  }
  const { id, title, image, rating, totalEpisodes, status } = data
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image src={image} height={400} width={280} alt="background" />
      </div>

      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.ranking}>{status}</div>
            {/* <div className={styles.new}>New</div> */}
          </div>

          <div className={styles.bookmark}>
            <FaBookmark />
          </div>

        </div>

        <div className={styles.animeDetail}>
          <div className={styles.name}>{title.english}</div>
          <div className={styles.re}>
            <div className={styles.rating}>
              <AiFillLike /> {rating} Rating
            </div>

            <div className={styles.episodes}>
              <BsStack /> {totalEpisodes} Episodes
            </div>
          </div>
        </div>
      </div>

      <Link href={`/watch/${id}`} className={styles.overlay}>
        <FaPlayCircle />
      </Link>

      {hasborder ? <div className={styles.border}></div> : <div className={styles.normalborder}></div>}
    </div>
  )
}

export default Card
import Image from "next/image"
import loadingStyles from "./loading.module.css"
import styles from "./../card/card.module.css"
import { FaBookmark } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";


const RecentReleasesCard = ({ isLoading = false, info, }) => {
  if (isLoading) {
    return <div className={loadingStyles.loading}></div>
  }

  const { id, title, image, episodeNumber } = info
  return (
    <div className={styles.container}>
      <div className={`${styles.backgroundImage} ${loadingStyles.backgroundImage}`}>
        <Image src={image} height={360} width={250} alt="card" />
      </div>

      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.left}>
            {/* <div className={styles.new}>18+</div> */}
          </div>

          <div className={styles.bookmark}>
            <FaBookmark />
          </div>

        </div>

        <div className={styles.animeDetail}>
          <div className={styles.name}>{title['english']}</div>
          <div className={styles.re}>

            <div className={styles.episodes}>
              <BsStack /> {episodeNumber} Episodes
            </div>
          </div>
        </div>
      </div>

      <Link href={`/watch/${id}`} className={styles.overlay}>
        <FaPlayCircle />
      </Link>
    </div>
  )
}

export default RecentReleasesCard
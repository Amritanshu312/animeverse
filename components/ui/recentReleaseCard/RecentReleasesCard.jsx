import Image from "next/image"
import loadingStyles from "./loading.module.css"
import styles from "./../card/card.module.css"
import { FaBookmark } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";


const RecentReleasesCard = ({ isLoading = false, info, }) => {
  if (isLoading) {
    return <div className={loadingStyles.loading}></div>
  }

  const { id, title, image, currentEpisode } = info
  return (
    <motion.div className={styles.container} initial={"hidden"} animate={"show"}>
      <div className={`${styles.backgroundImage} ${loadingStyles.backgroundImage}`}>
        <Image src={image} height={460} width={350} alt="card" />
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
          <div className={styles.name}>{title.english}</div>
          <div className={styles.re}>

            <div className={styles.episodes}>
              <BsStack /> {currentEpisode} Episodes
            </div>
          </div>
        </div>
      </div>

      <Link href={`/info/${id}`} className={styles.overlay}>
        <FaPlayCircle />
      </Link>
    </motion.div>
  )
}

export default RecentReleasesCard
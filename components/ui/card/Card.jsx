import Image from "next/image"
import styles from "./card.module.css"
import loadingStyles from "./loading.module.css"
import { FaBookmark } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import { InView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const Card = ({ hasborder = false, isLoading = false, data }) => {
  const listItemVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  if (isLoading) {
    return <div className={loadingStyles.loading}></div>;
  }

  const { id, title, image, rating, totalEpisodes, status } = data
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.div
          className={styles.container}
          ref={ref}
          initial={"hidden"}
          animate={inView ? "show" : "hidden"}
          variants={listItemVariants}
          transition={{ duration: 0.5 }}
        >
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

          <Link href={`/info/${id}`} className={styles.overlay}>
            <FaPlayCircle />
          </Link>

          {hasborder ? <div className={styles.border}></div> : <div className={styles.normalborder}></div>}
        </motion.div>
      )}
    </InView>
  )
}

export default Card
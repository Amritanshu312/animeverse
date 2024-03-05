import Link from "next/link"
import styles from "./Items.module.css"
import { motion } from "framer-motion"

const Items = ({ display, IsTablet }) => {
  const items = [
    {
      name: "HomePage",
      link: "/"
    },
    {
      name: "Series",
      link: "/series"
    },
    {
      name: "Animes",
      link: "/animes"
    },
    {
      name: "Bookmarks",
      link: "/bookmarks"
    },
    {
      name: "Alphabetical List",
      link: "/alphabetical"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3, duration: 0.5 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', damping: 15, stiffness: 200 }
    }
  };

  const listItemTransition = {
    duration: 0.1,
    ease: "easeInOut"
  };

  return (
    <motion.ul className={`${styles.items} ${IsTablet ? styles.itemsTablet : ""}`} style={{ display: display }} variants={containerVariants} initial="hidden" animate="show">
      {
        items.map((item, index) =>
          <motion.li key={index} className={`${styles.listitem} ${index === 0 && styles.active}`} variants={listItemVariants} transition={listItemTransition}><Link href={item.link}>{item.name}</Link></motion.li>
        )
      }
    </motion.ul>
  )
}

export default Items

import Link from "next/link"
import styles from "./Items.module.css"

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
  return (
    <ul className={`${styles.items} ${IsTablet ? styles.itemsTablet : ""}`} style={{ display: display }}>
      {
        items.map((item, index) =>
          <li key={index} className={`${styles.listitem} ${index === 0 && styles.active}`}><Link href={item.link}>{item.name}</Link></li>
        )
      }
    </ul>
  )
}

export default Items
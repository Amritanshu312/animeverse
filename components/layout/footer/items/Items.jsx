import Link from "next/link"
import styles from "./items.module.css"

const Items = () => {
  const items = [
    {
      name: "FAQ",
      link: "/faq"
    },
    {
      name: "Privacy Policy",
      link: "/privacy-policy"
    },
    {
      name: "Terms of service",
      link: "/terms-of-service"
    },
    {
      name: "Send Feedback",
      link: "/send-feedback"
    },
  ]
  return (
    <div className={styles.items}>
      {
        items.map((item, index) => (
          <Link href={item.link} key={index} className={styles.item}>{item.name}</Link>
        ))
      }
    </div>
  )
}

export default Items
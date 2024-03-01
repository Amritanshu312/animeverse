import styles from "./footer.module.css"
import Items from "./items/Items"
import {
  FaFacebookF as Facebook,
  FaTwitter as Twitter,
  FaYoutube as Youtube
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Items />

        <div className={styles.socials}>
          <button><Facebook /></button>
          <button><Twitter /></button>
          <button><Youtube /></button>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright © AnimeVerse. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
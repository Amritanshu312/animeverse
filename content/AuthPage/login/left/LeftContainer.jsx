import styles from "./left.module.css"
import FormField from "@/content/AuthPage/login/left/formField/FormField";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import Image from "next/image";

const LeftContainer = () => {
  return (
    <div className={styles.left}>
      <div className={styles.back}><IoArrowBackOutline /> Back To HomePage</div>

      <div className={styles.center}>
        <Link href={"/"} className={styles.logo}>
          <Image src="/images/logo/logo-2.png" alt="logo" width={50} height={50} priority />
          <span>AnimeVerse</span>
        </Link>

        <div className={styles.heading}>
          <p>Enter The Anime Universe</p>
          <p>Be Part Of The journey</p>
        </div>

        <div className={styles.highlight}>Do you have a AnimeVerse account? <Link href={"/login"}>Login Now</Link></div>

        <FormField />

        <div className={styles.highlight}>
          This Site is Protected by reCAPTCHA and the Google <Link href={"/"}>Privacy Policy</Link> and <Link href={"/"}>Terms of Service</Link> apply
        </div>
      </div>
    </div>
  )
}

export default LeftContainer
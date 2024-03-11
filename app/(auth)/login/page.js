import { IoArrowBackOutline } from "react-icons/io5";
import styles from './login.module.css'
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const Login = () => {
  return (
    <div className={styles.container}>
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

          <div className={styles.highlight}>Do you have a AnimeVerse account? <Link href={"/login"}>Login In Now</Link></div>

          <form>

            <div className={styles.input}>
              <FaUserCircle />
              <input type="text" placeholder="Your Username" />
            </div>

            <div className={styles.input}>
              <HiOutlineMailOpen />
              <input type="email" placeholder="Your Email" />
            </div>

            <div className={styles.input}>
              <FaLock />
              <input type="password" placeholder="Your Password" />
            </div>

            <div className={styles.input}>
              <FaLock />
              <input type="password" placeholder="Repeat Password" />
            </div>

            <input type="submit" value="Sign Up" />
          </form>

          <div className={styles.highlight}>
            This Site is Protected by reCAPTCHA and the Google <Link href={"/"}>Privacy Policy</Link> and <Link href={"/"}>Terms of Service</Link> apply
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.background}>
          <Image src="/images/cover/jjk.jpg" alt="background" fill quality={50} />
        </div>

        <div className={styles.info}>
          <div className={styles.image}>
            <Image src="/images/cover/jjk.jpg" alt="background" height={400} width={250} />
          </div>

          <div className={styles.animeinfo}>
            <div className={styles.title}>Jujutsu Kaisen</div>
            <div className={styles.description}>Young Yuji unwittingly joins his school&apos;s Occult Club, discovers they&apos;re sorcerers, and becomes host to the demon Sukuna. Mastering his magic, he enrolls in Tokyo Metropolitan Magic Technical College to collect Sukuna&apos;s fingers for a full exorcism.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
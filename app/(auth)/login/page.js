import LeftContainer from '@/content/AuthPage/login/left/LeftContainer';
import styles from './login.module.css'
import Image from "next/image";


const Login = () => {
  return (
    <div className={styles.container}>
      <LeftContainer />

      <div className={styles.right}>
        <div className={styles.background}>
          <Image src="/images/cover/jjk.jpg" alt="background" fill quality={10} />
        </div>

        <div className={styles.info}>
          <div className={styles.image}>
            <Image src="/images/cover/jjk.jpg" alt="background" height={500} width={300} />
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
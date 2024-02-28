import Image from "next/image"
import styles from "./banner.module.css"
import AnimeInfo from "./AnimeInfo/AnimeInfo"

const Banner = ({ info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerImage}>
        <Image src={info.image} alt="banner" width={1000} height={396} />
        {/* <video src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" width="1000" height="396" autoPlay muted loop></video> */}
      </div>

      <AnimeInfo info={info} />
    </div >
  )
}

export default Banner
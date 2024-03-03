"use client"
import styles from "./slidingBanner.module.css"
import Banner from "@/components/ui/banner/Banner"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const SlidingBanner = () => {

  const items = [
    {
      id: `101922`,
      name: "Demon Slayer",
      image: "/images/wallpapers/demon slayer.jpg",
      video: 'https://firebasestorage.googleapis.com/v0/b/anime-nsfw.appspot.com/o/edits%2Fdemon%20slayer%20edit%20(2).mp4?alt=media&token=dd51ecd4-2dcd-4ce8-b783-3612aea528f6',
      description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
      type: "TV",
      genre: ["Action", "Shounen", "Revenge"],
    },
    {
      id: `21`,
      name: "ONE PIECE",
      image: "/images/wallpapers/one piece.jpg",
      description: "In the world of pirates, Gol D. Roger, known as the Pirate King, left behind the legendary treasure, One Piece, sparking a global quest. Monkey D. Luffy, inspired by Roger's legacy, sets sail with a diverse crew to find One Piece and claim the title of Pirate King.",
      type: "TV",
      genre: ["Action", "Shounen", "Adventure"],
    },
    {
      id: `1735`,
      name: "Naruto: Shippuden",
      image: "/images/wallpapers/naruto.webp",
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
      type: "TV",
      genre: ["Action", "Shounen", "Adventure"],
    }
  ]

  return (
    // <div >
    <Swiper
      spaceBetween={0}
      loop={true}
      centeredSlides={true}
      className={styles.container}>
      {items.map((item, index) => <SwiperSlide key={index} className={styles.swiperSlide}><Banner info={item} /></SwiperSlide>)}
      {/* <SwiperSlide className={styles.swiperSlide}><Banner /></SwiperSlide> */}
    </Swiper>
    // </div >
  )
}

export default SlidingBanner
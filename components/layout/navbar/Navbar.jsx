"use client"
import Image from "next/image"
import styles from "./navbar.module.css"
import Items from "./Items/Items"
import { FaUserCircle as AccountIcon } from "react-icons/fa";
import Search from "./search/Search";
import { HiOutlineMenuAlt2 as HamburgerIcon } from "react-icons/hi";
import Tablet from "./responsive/Tablet/Tablet";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isHamburgerToggled, setIsHamburgerToggled] = useState(false)
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.left}>
          {/* for table to mobile phone viewport */}
          <div className={styles.hamburger} onClick={() => setIsHamburgerToggled(prev => !prev)}>
            <HamburgerIcon />
          </div>

          {isHamburgerToggled ? <Tablet /> : null}

          <Link href={"/"} className={styles.logo}>
            <Image src="/images/logo/logo-2.png" alt="logo" width={50} height={50} priority />
            <span>AnimeVerse</span>
          </Link>

          <Items />
        </div>

        <div className={styles.right}>
          <button className={styles.account}><AccountIcon /> My Account</button>
          <Search />
        </div>

      </div>
    </nav>
  )
}

export default Navbar
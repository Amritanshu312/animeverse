"use client"
import { IoIosArrowDown } from "react-icons/io";
import styles from "./options.module.css"
import { useState } from "react";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";

const Option = ({ defaultOption, items, icon, multipleSelection }) => {
  const [isSelected, setIsSelected] = useState(false)
  const [selected, setSelected] = useState([])

  const onHandleSelect = (itemSelected) => {
    if (multipleSelection) {
      if (!selected.includes(itemSelected)) {
        setSelected([...selected, itemSelected]);
      } else {
        setSelected(selected.filter(item => item !== itemSelected));
      }
    }

    else {
      if (itemSelected !== selected) {
        setSelected(itemSelected)
      }
      else {
        setSelected("")
      }
    }
  };

  return (
    <div className={styles.optionsContainer}>
      <div className={styles.genres} onClick={() => setIsSelected(prev => !prev)}>
        <div
          className={styles.left}>
          {icon}
          {defaultOption}
        </div>
        <div className={styles.right}>{typeof selected === "string" ? selected.length > 8 ? `${selected.slice(0, 8)}...` : selected : selected.slice(0, 2).join(", ")} <span><IoIosArrowDown /></span></div>
      </div>

      {isSelected &&
        <div className={styles.options}>
          {items.map((item, index) => (
            <div className={`${styles.item} ${selected.includes(item) ? styles.active : ""}`} key={index} onClick={() => onHandleSelect(item)}>
              {selected.includes(item) ? <FaRegDotCircle /> : <FaRegCircle />}
              {item}
            </div>
          ))}
        </div>
      }

    </div>
  )
}

export default Option
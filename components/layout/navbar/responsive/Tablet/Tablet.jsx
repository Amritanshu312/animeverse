import Items from "../../Items/Items"
import styles from "./Tablet.module.css"

const Tablet = () => {
  return (
    <div className={styles.container}>
      <Items display={"flex"} IsTablet={true} />
    </div>
  )
}

export default Tablet
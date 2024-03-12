import styles from "./formField.module.css"
import { FaUserCircle, FaLock } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";


const FormField = () => {
  return (
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
  )
}

export default FormField
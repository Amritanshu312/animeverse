import styles from "./loading.module.css"

const Loading = () => {
  return (
    <div className={styles.loadingcontainer}>
      <div className={styles.loading}>
        <svg width="50" height="50" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.path} d="M14.3564 0L28.2128 24H0.5L14.3564 0Z" />
          <defs>
            <linearGradient id="paint0_linear_742_347" x1="3.35641" y1="18" x2="25.8564" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E5B1EE" />
              <stop offset="0.517791" stopColor="#D9D9D9" />
              <stop offset="0.9999" stopColor="#57859C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Loading;

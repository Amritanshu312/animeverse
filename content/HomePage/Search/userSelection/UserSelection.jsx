"use client"

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import styles from "./userSelection.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const UserSelection = ({ q }) => {
  const { searchData, setSearchData } = q;
  const [value, setValue] = useState(searchData.q);

  const Param = useSearchParams();
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/search?q=${value}&${Param.toString()}`);
    setSearchData({ ...searchData, q: value });
  };

  return (
    <div className={styles.searchInfo}>
      <div className={styles.title}>Welcome to Animeverse Search!</div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          className={styles.searchInput}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => (e.key === "Enter" ? handleSearch() : null)}
        />
        <button onClick={handleSearch}>
          <IoIosSearch />
        </button>
      </div>
    </div>
  );
};

export default UserSelection;

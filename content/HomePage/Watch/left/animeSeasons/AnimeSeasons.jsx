"use client"

import styles from "./animeSeasons.module.css";
import { FaSwatchbook } from "react-icons/fa6";
import SeasonSelectorCard from "./card/SeasonSelectorCard";
import { Fragment, useEffect, useState } from "react";
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from "react-icons/io";

const AnimeSeasons = ({ data }) => {
  const pageSize = 6; // Number of items per page
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(data.length / pageSize));
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    setDatas(data.slice(start, end));
    setTotalPages(Math.ceil(data.length / pageSize));
  }, [page, data]);

  const goToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <div className={styles.identifier}>
        <FaSwatchbook />
        Other Seasons
      </div>

      <div className={styles.pagination}>
        <button onClick={() => goToPage(page - 1)} disabled={page === 1}><LeftArrow /></button>
        <div className={styles.pageNumbers}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => goToPage(index + 1)} className={page === index + 1 ? styles.active : ""}>
              {index + 1}
            </button>
          ))}
        </div>
        <button onClick={() => goToPage(page + 1)} disabled={page === totalPages}><RightArrow /></button>
      </div>

      <div className={styles.container}>
        {datas.map((items, index) => (
          <Fragment key={index}>
            <SeasonSelectorCard info={items} />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default AnimeSeasons;

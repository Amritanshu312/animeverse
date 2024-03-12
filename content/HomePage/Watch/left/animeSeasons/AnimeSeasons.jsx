"use client"

import styles from "./animeSeasons.module.css";
import { FaSwatchbook } from "react-icons/fa6";
import SeasonSelectorCard from "./card/SeasonSelectorCard";
import { useEffect, useState } from "react";
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from "react-icons/io";

const AnimeSeasons = ({ data }) => {
  const pageSize = 6; // Number of items per page
  const [dataPage, setDataPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(data.length / pageSize));
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const updateDatas = () => {
      const start = (dataPage - 1) * pageSize;
      const end = start + pageSize;
      setDatas(datas.slice(start, end));
      setTotalPages(Math.ceil(datas.length / pageSize));
    };
    updateDatas();
  }, [dataPage, datas]);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setDataPage(pageNumber);
    }
  };

  return (
    <>
      <div className={styles.identifier}>
        <FaSwatchbook />
        Other Seasons
      </div>

      <div className={styles.pagination}>
        <button onClick={() => goToPage(dataPage - 1)} disabled={dataPage === 1}><LeftArrow /></button>
        <div className={styles.pageNumbers}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => goToPage(index + 1)} className={dataPage === index + 1 ? styles.active : ""}>
              {index + 1}
            </button>
          ))}
        </div>
        <button onClick={() => goToPage(dataPage + 1)} disabled={dataPage === totalPages}><RightArrow /></button>
      </div>

      <div className={styles.container}>
        {data.map((items, index) => (
          <div key={index}>
            <SeasonSelectorCard info={items} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimeSeasons;

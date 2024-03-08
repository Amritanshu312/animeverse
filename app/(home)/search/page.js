"use client"
import Image from 'next/image';
import styles from './search.module.css';
import UserSelection from '@/content/Search/userSelection/UserSelection';
import Catalog from '@/content/Search/userSelection/catalog/Catalog';
import Card from '@/components/ui/card/Card';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ReactPaginate from 'react-paginate';

const Search = () => {
  const [datas, setDatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  const param = useSearchParams();
  const [searchData, setSearchData] = useState({
    q: param.get("q") || "",
    genres: param.get("genres") || "",
    status: param.get("status") || "",
    season: param.get("season") || "",
    type: param.get("type") || "",
    year: param.get("year") || "",
  });


  useEffect(() => {
    setSearchData({
      q: param.get("q") || "",
      genres: param.get("genres") || "",
      status: param.get("status") || "",
      season: param.get("season") || "",
      type: param.get("type") || "",
      year: param.get("year") || "",
    });
  }, [param]);

  useEffect(() => {
    setSearchData(searchData);

    const fetchData = async () => {
      setIsLoaded(false);
      setError(null);
      try {
        const params = {
          "query": decodeURIComponent(searchData.q),
          "season": searchData.season,
          "format": searchData.type,
          "genres": searchData.genres,
          "status": searchData.status,
          "year": searchData.year
        };

        const searchDataString = Object.keys(params)
          .map(k => params[k] !== "" ? encodeURIComponent(k) + '=' + encodeURIComponent(params[k]) : null)
          .filter(Boolean) // Filter out null values
          .join('&');

        const response = await fetch(`${process.env.API_URL}/meta/anilist/advanced-search?${searchDataString}&page=${pageCount}`);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDatas(data || []);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again.');
        setIsLoaded(true);
      }
    };

    fetchData();

  }, [searchData, pageCount]);

  const handlePageChange = (selectedPage) => {
    setPageCount(selectedPage + 1);
  }

  return (
    <>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/banner/Fearless and dark.jpeg"
          alt="background"
          quality={10}
          fill
        />
        <UserSelection q={{ searchData, setSearchData }} />
      </div>

      <div className={styles.container}>
        <div className={styles.sectionContainer}>
          <Catalog />
          <div className={styles.right}>
            {isLoaded ? (
              error ? (
                <p>{error}</p>
              ) : (
                datas?.results?.map((data, index) => (
                  <Card data={data} key={index} />
                ))
              )
            ) :
              Array.from({ length: 10 }).map((_, index) => (
                <Card key={index} isLoading />
              ))
            }
          </div>
        </div>
      </div>

      <ReactPaginate
        containerClassName={styles.pagination}
        pageClassName={styles.PageLink}
        pageLinkClassName={styles.aLink}
        activeClassName={styles.activePage}
        breakClassName={styles.break}
        previousClassName={styles.pageChanger}
        nextClassName={styles.pageChanger}
        previousLabel={<FaAngleLeft />}
        nextLabel={<FaAngleRight />}
        onPageChange={(event) => handlePageChange(event.selected)}
        pageCount={datas?.totalPages}
        breakLabel="..."
      />
    </>
  );
};

export default Search;
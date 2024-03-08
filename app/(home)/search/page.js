"use client"

import Image from 'next/image'
import styles from './search.module.css'
import UserSelection from '@/content/Search/userSelection/UserSelection'
import Catalog from '@/content/Search/userSelection/catalog/Catalog'
import Card from '@/components/ui/card/Card'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Option from '@/content/Search/userSelection/options/Option'

const Search = () => {
  const [datas, setDatas] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const param = useSearchParams()
  const [searchData, setSearchData] = useState({
    q: param.get("q") || "",
    genres: param.get("g") || "",
    status: param.get("st") || "",
    season: param.get("se") || "",
    type: param.get("t") || "",
    year: param.get("y") || "",
  })

  useEffect(() => {
    setSearchData({
      q: param.get("q") || "",
      genres: param.get("g") || "",
      status: param.get("st") || "",
      season: param.get("se") || "",
      type: param.get("t") || "",
      year: param.get("y") || "",
    })
  }, [param])


  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false);
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

        const response = await fetch(`${process.env.API_URL}/meta/anilist/advanced-search?${searchDataString}`);
        console.log(response.url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDatas(data);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state here
        setDatas([]);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, [searchData]);


  return (
    <>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/banner/Fearless and dark.jpeg"
          alt="background"
          quality={10}
          fill
        />
        <UserSelection />
      </div>


      <div className={styles.container}>
        <div className={styles.sectionContainer}>
          <Catalog />
          <div className={styles.right}>
            {datas?.results?.map((data, index) => (
              <Card data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/layout/loading/Loading";
import AnimeInfo from "@/content/HomePage/Watch/left/animeInfo/AnimeInfo";
import VideoPlayer from "@/content/HomePage/Watch/left/videoPlayer/VideoPlayer";
import VideoOption from "@/content/HomePage/Watch/left/videoOption/VideoOption";
import VideoSelector from "@/content/HomePage/Watch/left/videoSelector/VideoSelector";
import EpisodeSelector from "@/components/ui/episodeSelector/EpisodeSelector";
import MostPopular from "@/content/HomePage/Watch/right/mostPopular/MostPopular";
import AtoZalphabet from "@/components/ui/AtoZalphabet/AtoZalphabet";
import { fetchData } from "@/lib/FetchData";
import styles from "./watch.module.css";
import Recommendation from "@/content/HomePage/Watch/right/recommendation/Recommendation";
import AnimeSeasons from "@/content/HomePage/Watch/left/animeSeasons/AnimeSeasons";

const Watch = ({ params }) => {
  const { id } = params;
  const searchParams = useSearchParams();

  const [animeInfo, setAnimeInfo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [VideoOptionToggler, setVideoOptionToggler] = useState([]);
  const [videoSelected, setVideoSelected] = useState({ server: "default", url: null });

  const episode = searchParams.get('episode') || animeInfo?.episodes?.[0]?.number || 1;




  useEffect(() => {
    const fetchAnimeInfo = async () => {
      try {
        setIsLoaded(false);
        const data = await fetchData(`/meta/anilist/data/${id}`, 86400);
        setAnimeInfo(data.data);
        document.title = `Watch ${data.data.title.english} - Animeverse`;
      } catch (error) {
        console.error("Error fetching anime info:", error);
      }
      finally {
        setIsLoaded(true);
      }
    };

    fetchAnimeInfo();
  }, [id]);


  return !isLoaded ? <Loading /> : (
    <>
      <AnimeInfo info={animeInfo} episode={episode} />
      <div className={styles.container}>
        <div className={styles.left}>
          <VideoPlayer data={{ animeInfo, videoSelected }} />
          <VideoOption id={id} currentEpisode={episode} VideoOptionToggler={VideoOptionToggler} />
          <VideoSelector episodeID={searchParams.get('episodeID') || animeInfo !== null && animeInfo?.episodes?.[0]?.id} setVideoSelected={setVideoSelected} videoSelected={videoSelected} />
          <EpisodeSelector episode={id} activeEpisdoe={episode} setVideoOptionToggler={setVideoOptionToggler} />
          {/* <AnimeSeasons data={animeInfo.relations} /> */}
        </div>
        <div className={styles.right}>
          <Recommendation data={animeInfo?.recommendations.slice(0, 5)} />
          <MostPopular />
        </div>
      </div>
      <AtoZalphabet />
    </>
  );
};

export default Watch;

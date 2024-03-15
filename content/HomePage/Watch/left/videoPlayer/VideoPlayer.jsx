import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import styles from "./videoPlayer.module.css"

import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchData } from '@/lib/FetchData';


const VideoPlayer = ({ data }) => {
  const { animeInfo, videoSelected } = data;

  const { cover, episodes } = animeInfo;

  const [watch, setWatch] = useState(videoSelected?.url)
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        if (animeInfo !== null) {
          const data = await fetchData(`/meta/anilist/watch/${searchParams.get('episodeID') || episodes?.[0]?.id}`);
          if (data.ok) {
            setWatch(data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [searchParams, animeInfo, episodes]);

  return loading ?
    <div className={styles.loading}><div className={styles.i}><div></div><div></div></div></div>
    : videoSelected?.server === "default" ? (
      <MediaPlayer src={watch?.sources?.filter(item => item.quality === "default")[0].url} className={styles.container} >
        <MediaProvider>
          <Poster src={cover || "/images/banner/Stronger than ever.jpeg"} className={styles.mediaPoster} alt='poster' />
        </MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer >
    ) : (
      <iframe src={videoSelected?.url} className={styles.container} frameBorder="0" ></iframe>
    )
}

export default VideoPlayer
'use client';
import Loading from '@/components/layout/loading/Loading';
import { fetchData } from '@/lib/FetchData';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Download = ({ params }) => {
  const { push } = useRouter();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await fetchData(`/meta/anilist/watch/${params.id}`);
        if (data.ok) {
          // console.log(data.data.download);
          push(data.data.download);
        }
      } catch (error) {
        console.error("Error fetching Download url:", error);
      }
    };

    fetchVideos();
  }, []);

  return <Loading />;
};

export default Download;

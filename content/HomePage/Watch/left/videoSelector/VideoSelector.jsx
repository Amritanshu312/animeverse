import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
import styles from "./videoSelector.module.css"
import { FaCirclePlay } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { fetchData } from "@/lib/FetchData";

const VideoSelector = ({ episodeID, setVideoSelected, videoSelected, downloadURL }) => {
  const [servers, setServers] = useState([])
  const router = useRouter()
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchedServer = async () => {
      try {
        if (episodeID !== undefined) {
          const data = await fetchData(`/meta/anilist/servers/${episodeID}`)

          if (data.ok) {
            setServers(data?.data)
            if (videoSelected?.server !== "default") {
              let url = data?.data?.find(server => server.name === videoSelected?.server)
              setVideoSelected({ server: url?.name, url: url?.url })
            }
            // setVideoSelected()
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchedServer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const handleServerSelection = (server, url) => {
    setVideoSelected({ server, url });
  };

  return (
    <>
      <div className={styles.identifier}>
        <FaCirclePlay />
        Select Video Quality or Download it
      </div>

      <div className={styles.selector}>
        {servers.slice(0, 4)?.map((server, index) => (
          <button key={index} onClick={() => handleServerSelection(server.name, server.url)} className={videoSelected?.server === server.name ? styles.active : ""}>
            {server.name}
          </button>
        ))}
        <button onClick={() => handleServerSelection("default", "")} className={videoSelected?.server === "default" ? styles.active : ""}>Default</button>
        <button onClick={() => router.push(downloadURL)}><FaDownload /> Download</button>
      </div>
    </>
  )
}

export default VideoSelector;

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import styles from "./videoSelector.module.css"
import { FaCirclePlay } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { fetchData } from "@/lib/FetchData";

const VideoSelector = ({ episodeID, setVideoSelected, downloadURL }) => {
  const [servers, setServers] = useState([])
  const router = useRouter()

  useEffect(() => {
    const fetchedServer = async () => {
      try {
        if (episodeID !== undefined) {
          const data = await fetchData(`/meta/anilist/servers/${episodeID}`)

          console.log(data);
          if (data.ok) {
            setServers(data?.data)
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchedServer()
  }, [])

  const handleServerSelection = (url) => {
    setVideoSelected(url);
  };

  return (
    <>
      <div className={styles.identifier}>
        <FaCirclePlay />
        Select Video Quality or Download it
      </div>

      <div className={styles.selector}>
        {servers.slice(0, 4)?.map((server, index) => (
          <button key={index} onClick={() => handleServerSelection(server.url)}>
            {server.name}
          </button>
        ))}
        <button onClick={() => setVideoSelected("default")}>Default</button>
        <button onClick={() => router.push(downloadURL)}><FaDownload /> Download</button>
      </div>
    </>
  )
}

export default VideoSelector;

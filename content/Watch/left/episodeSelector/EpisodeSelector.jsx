"use client"

import { useEffect, useState } from "react";
import styles from "./episodeSelector.module.css"
import { BsStack } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const EpisodeSelector = () => {
  const episodes = [
    {
      "id": "one-piece-episode-1",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 1,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    },
    {
      "id": "one-piece-episode-456",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 2,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    },
    {
      "id": "one-piece-episode-3456",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 3,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    },
    {
      "id": "one-piece-episode-6435",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 4,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    },
    {
      "id": "one-piece-episode-5",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 5,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    },
    {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }, {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }, {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }, {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }, {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }, {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }, {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }, {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }, {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }, {
      "id": "one-piece-episode4",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 6,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    },
    {
      "id": "one-piece-episode-3",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 7,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    },
    {
      "id": "one-piece-episode-2",
      "title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      "image": "https://media.kitsu.io/episodes/thumbnails/103482/original.jpg",
      "imageHash": "hash",
      "number": 8,
      "createdAt": "2013-03-26T08:42:37Z",
      "description": null,
      "url": "https://gogoanime3.co//one-piece-episode-1"
    }
  ]

  const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filter = episodes.filter((item) => item.number.toString().toLowerCase().includes(search.toLowerCase()))
    setFilteredEpisodes(filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <>
      <div className={styles.identifier}>
        <BsStack />
        Select Episodes
      </div>

      <div className={styles.searchEp}>
        <IoIosSearch />
        <input type="text" placeholder="search..." onChange={e => setSearch(e.target.value)} value={search} />
      </div>

      <div className={styles.episodes} >
        {filteredEpisodes.map((item, index) =>
          <div className={styles.episode} key={index}>
            <span>Episode {item.number}</span>
            <span>october 16, 2023</span>
          </div>)}
      </div>
    </>
  )
}

export default EpisodeSelector
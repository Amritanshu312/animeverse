let version = 1;
let db;

export const Watched = {
  AnimeWatched: 'watched',
};

export const initDB = () => {
  return new Promise((resolve, reject) => {
    let request = indexedDB.open('Anime', version);

    request.onupgradeneeded = () => {
      db = request.result;

      if (!db.objectStoreNames.contains(Watched.AnimeWatched)) {
        console.log('Creating watched store');
        db.createObjectStore(Watched.AnimeWatched, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      console.log('Database opened successfully');
      resolve(true);
    };

    request.onerror = () => {
      console.error('Error opening database');
      reject(new Error('Failed to open database'));
    };
  });
};

export const addAnimeEpisodes = (anime) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([Watched.AnimeWatched], 'readwrite');
    const objectStore = transaction.objectStore(Watched.AnimeWatched);

    const request = objectStore.add(anime);

    request.onsuccess = () => {
      console.log('Anime added to watched:', anime);
      resolve(true);
    };

    request.onerror = () => {
      console.error('Error adding anime to watched:', anime);
      reject(new Error('Failed to add anime to watched'));
    };
  });
};

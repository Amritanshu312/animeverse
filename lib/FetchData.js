export const fetchData = (urlPath) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${process.env.API_URL}${urlPath}`, { next: { revalidate: 43200 } });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

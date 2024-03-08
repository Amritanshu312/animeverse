export const fetchData = (urlPath) => {
  return new Promise(async (resolve, reject) => {
    let response; // declare response outside try block
    try {
      response = await fetch(`${process.env.API_URL}${urlPath}`, { next: { revalidate: 14400 } });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      resolve({
        data: data,
        ok: response.ok
      });
    } catch (error) {
      reject({ error, ok: response ? response.ok : false }); // accessing response.ok safely
    }
  });
};

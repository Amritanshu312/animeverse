import axios from 'axios';

export const fetchData = (urlPath) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${process.env.API_URL}${urlPath}`);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
}

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

export const advancesearch = (param) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/meta/anilist/advanced-search`, { params: param });
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
}

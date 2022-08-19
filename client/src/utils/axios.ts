import axios, { AxiosInstance } from 'axios';

const customFetch: AxiosInstance = axios.create({
  baseURL: 'https://pastebin.com/raw/eNPBe2Pk',
  headers: {
    ContentType: 'application/json',
  },
});

export default customFetch;

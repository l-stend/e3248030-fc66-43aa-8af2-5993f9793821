import axios, { AxiosInstance } from 'axios';

const customFetch: AxiosInstance = axios.create({
  baseURL: 'https://pastebin.com/raw/eNPBe2Pk',
  // mode: 'no-cors',
  headers: {
    // Accept: 'application/json',
    ContentType: 'application/json',

    // AccessControlAllowOrigin: 'http://localhost:3000/',
    // AccessControlAllowMethods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default customFetch;

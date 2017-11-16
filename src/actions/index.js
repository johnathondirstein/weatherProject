import axios from 'axios';

const API_KEY = "91f7608ca5f5495802fd48fdacee0b64";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

 
  return {
    type: FETCH_WEATHER
  };
}


// Axios is made to make ajax request from the browser
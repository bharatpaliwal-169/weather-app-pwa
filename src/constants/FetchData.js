import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '1330d1fb6e148db6c5a128f1cd8faedb'

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
      params: {
          q: query,
          units: 'metric',
          APPID: API_KEY,
      }
  });

  return data;
}

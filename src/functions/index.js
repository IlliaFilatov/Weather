import axios from 'axios'
import { weatherApiKey } from 'constants/apiKeys'

export const convertTimeFromOffset = (offset) => Date.now() + offset

export const getWeatherInfo = async () => {
  return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=50.450001&lon=30.523333&appid=${weatherApiKey}`)
}
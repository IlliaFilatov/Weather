import React, { useEffect, useState, useRef, useMemo } from 'react'
import moment from 'moment'

import { convertTimeFromOffset, getWeatherInfo } from 'functions'
import { Background, Clouds } from 'components'

import {
  DateString,
  TimeString,
} from './styles'

export const App = () => {
  const [weather, setWeather] = useState()

  const timerIntervalRef = useRef()

  const onGetWeatherInfo = async () => {
    setWeather((await getWeatherInfo()).data)
  }

  useEffect(() => {
    onGetWeatherInfo()

    return () => {
      clearInterval(timerIntervalRef.current)
    }
  }, [])

  const showDateTime = () => {
    const dateElement = document.getElementById('date')
    const timeElement = document.getElementById('time')
    const timerInterval = setInterval(() => {
      const timeConverted = convertTimeFromOffset(weather.timezone)
      dateElement.innerHTML = moment(timeConverted).format('DD-MMMM-YYYY')
      timeElement.innerHTML = moment(timeConverted).format('hh:mm a')
    }, 1000)
    timerIntervalRef.current = timerInterval
  }

  const calculateTimeOfDay = useMemo(() => {
    if (weather) {
      const sunsetDiff = moment(new Date(weather.sys.sunset * 1000)).diff(moment(new Date()))
      const sunriseDiff = moment(new Date(weather.sys.sunrise * 1000)).diff(moment(new Date()))
      console.log('sunsetDiff: ', sunsetDiff)
      console.log('sunriseDiff: ', sunriseDiff)
      if (sunriseDiff > 0 && sunriseDiff / 60000 < 30) {
        console.log(2)
        return 2
      }
      if (sunsetDiff > 0 && sunsetDiff / 60000 < 30) {
        console.log(4)
        return 4
      }
      if (sunsetDiff < 60000 || sunsetDiff > sunriseDiff) {
        console.log(1)
        return 1
      }
      if (sunriseDiff < 60000 || sunsetDiff < sunriseDiff) {
        console.log(3)
        return 3
      }
    }
    console.log('loading')
    return ''
  }, [weather])

  const calculateCloudsSpeed = useMemo(() => {
    if (weather) {
      return 180 / weather.wind.speed
    }
    return 0
  }, [weather])  

  useEffect(() => {
    showDateTime()
  }, [weather])

  return (
    <Background timeOfDay={calculateTimeOfDay} windSpeed={calculateCloudsSpeed}>
      <DateString id="date" />
      <TimeString id="time" />
      <span>{weather ? `CLOUDS: ${weather.clouds.all}` : '...loading'}</span>
      <span>{weather ? `LAT: ${weather.coord.lat} LON: ${weather.coord.lon}` : '...loading'}</span>
      <span>{weather ? `COUNTRY: ${weather.sys.country}` : '...loading'}</span>
      <span>{weather ? `SUNRISE: ${moment(new Date(weather.sys.sunrise * 1000)).format('hh:mm:ss a')}` : '...loading'}</span>
      <span>{weather ? `SUNSET: ${moment(new Date(weather.sys.sunset * 1000)).format('hh:mm:ss a')}` : '...loading'}</span>
      <span>{weather ? `VISIBILITY: ${weather.visibility}` : '...loading'}</span>
      <span>{weather ? `WEATHER: ${weather.weather[0].description}` : '...loading'}</span>
      <span>{weather ? `WIND: ${weather.wind.speed}m/s` : '...loading'}</span>
    </Background>
  );
}

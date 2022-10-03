import React from 'react'

import { Clouds } from 'components'

import {
  Container,
  WeatherElements,
  Content,
} from './styles'

export const Background = ({ timeOfDay, windSpeed, children }) => {
  return (
    <Container timeOfDay={timeOfDay}>
      <WeatherElements>
        <Clouds windSpeed={windSpeed} />
      </WeatherElements>
      <Content>
        {children}
      </Content>
    </Container>
  )
}
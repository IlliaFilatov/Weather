import React from 'react'

import {
  Cloud,
  CloudsContainer,
} from './styles'

export const Clouds = ({ windSpeed }) => {
  return (
    <CloudsContainer>
      <Cloud windSpeed={windSpeed} />
    </CloudsContainer>
  )
}
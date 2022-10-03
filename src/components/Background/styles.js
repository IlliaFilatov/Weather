import styled from 'styled-components'

const timeOfDayBackground = (variant) => {
  switch (variant) {
    case 1: // night
    return `
      background: linear-gradient(180deg, rgba(0,2,26,1) 0%, rgba(0,21,45,1) 56%, rgba(0,42,95,1) 100%);
    `
    case 2: // dawn
      return `
        background: linear-gradient(180deg, rgba(50,142,215,.7) 15%, rgba(212,152,165,.8) 80%, rgba(192,132,145,.8) 90%, rgba(192,52,115,.7) 100%);
      `
    case 3: // day
      return `
        background: linear-gradient(180deg, rgba(50,142,215,1) 40%, rgba(195,200,255,1) 100%);
      `
    case 4: // dusk
      return `
        background: linear-gradient(180deg, rgba(23,51,85,.9) 25%, rgba(134,118,118,.9) 80%, rgba(192,132,105,.8) 90%, rgba(142,70,75,.7) 100%);
      `
    default:
      break;
  }
}

// rgba(122,152,155,.9)

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-shadow: 0px 1px 2px black;
  color: white;
  ${({ timeOfDay }) => timeOfDayBackground(timeOfDay)}
`

export const WeatherElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`
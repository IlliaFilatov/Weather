import styled from 'styled-components'

const cloudBg = `
  background: linear-gradient(180deg, rgba(255, 255, 255, .8) 0%, rgba(255, 255, 255, 1) 100%);
`

export const CloudsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0));
`

export const Cloud = styled.div`
  @keyframes floatingClouds {
    from {left: -40vw;}
    to {left: 140vw;}
  }

  position: absolute;
  top: 10vh;
  left: 50vw;
  height: 100px;
  width: 300px;
  border-radius: 100px;
  ${cloudBg}
  animation-name: floatingClouds;
  animation-duration: ${({ windSpeed }) => windSpeed}s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &:before {
    content: '';
    position: absolute;
    bottom: -40px;
    left: -30px;
    height: 50px;
    width: 280px;
    border-radius: 50px;
    ${cloudBg}
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -30px;
    right: -30px;
    height: 70px;
    width: 160px;
    border-radius: 70px;
    ${cloudBg}
  }
`

import styled from 'styled-components'
import { White, DimWhite } from '../../globalStyles'

export const HomeMars = styled.div`
  background-image: url('assets/mars.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 970px) {
    z-index: -10;
  }
`

export const Home = styled.div`
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

export const HomeSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 5;
`

export const HomeSectionMini = styled.div`
  height: 185px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 5;

  @media screen and (max-width: 970px) {
    height: auto;
    align-items: center;
    margin: 5% 0;
  }
`

export const HomeBlock = styled.div`
  flex: 1 1 185px;
  display: table;
  height: 185px;
  color: ${DimWhite};
  background: ${({ deg }) => linearGradient(deg)};
  font-family: MuseoSansCyrl-300;
  text-align: center;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background: ${({ deg }) => linearGradientHover(deg)};
    background-clip: padding-box;
    color: ${White};
    border: 1px solid rgba(255, 0, 0, 0.1);
    border-image-source: ${({ deg }) => linearGradientBorder(deg)};
    border-image-slice: 1;
  }

  @media screen and (max-width: 970px) {
    flex: 1 1 45%;
    height: auto;
  }
`
export const HomeTextBlock = styled.div`
  display: table-cell;
  vertical-align: middle;
`
export const HomeText = styled.span`
  vertical-align: middle;
  font-size: 0.9rem;
  @media screen and (max-width: 300px) {
    font-size: 6vw;
  }
`
export const HomeTextWeight = styled.h1`
  font-size: 3rem;
  @media screen and (max-width: 300px) {
    font-size: 15vw;
  }
`

export const HomeColorBlock = styled.div`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 67, 0, 1) 100%);

  @media screen and (max-width: 970px) {
    text-align: center;
  }
`
export const HomeColorBlockParagraph = styled.h3`
  font-size: 4.5vw;

  @media screen and (max-width: 750px) {
    font-size: 7vw;
  }
`
export const HomeColorBlockText = styled.p`
  font-size: 2vw;

  @media screen and (max-width: 750px) {
    font-size: 4vw;
  }
`

export const linearGradient = (deg) => `
	linear-gradient(${deg}deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%);
`
export const linearGradientHover = (deg) => `
	linear-gradient(${deg}deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 80%);
`
export const linearGradientBorder = (deg) => `
linear-gradient(${deg}deg, rgba(0, 0, 0, 0) 0%,  rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 80%);
`

import styled, { createGlobalStyle } from 'styled-components'

export const TransparentWhite = 'rgba(255, 255, 255, 0.21)'
export const DimWhite = 'rgba(255, 255, 255, 0.5)'
export const White = 'rgba(255, 255, 255, 0.8)'
export const TransparentBlack = 'rgba(0, 0, 0, 0.21)'
export const Red = 'rgba(255, 68, 0, 1)'
export const Blue = 'rgba(0, 90, 159, 1)'
export const DarkBlue = 'rgba(2, 19, 33, 1)'

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: MuseoSansCyrl-300;
		src: url('fonts/Museo Sans Cyrl 300.ttf');
	};
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		
	}
`

export const Background1 = styled.div`
  background-image: url('assets/fon1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`

export const Background2 = styled.div`
  background-image: url('assets/fon2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`

export const Background3 = styled.div`
  background-image: url('assets/fon3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`

export default GlobalStyle

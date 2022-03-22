import styled from 'styled-components'
import { TransparentWhite, TransparentBlack, Blue, White } from '../../globalStyles'

export const Button = styled.button`
  font-family: MuseoSansCyrl-300;
  font-size: 1rem;
  color: ${TransparentWhite};
  background: rgba(0, 0, 0, 0);
  border: 1px solid ${Blue};
  border-image: linear-gradient(to right top, ${Blue}, rgba(0, 0, 0, 0), ${Blue});
  border-image-slice: 1;

  padding: 8px 25px;
  cursor: pointer;

  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 1);
    clip: rect(auto, auto, 5px, 200px);
  }

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 1);
    clip: rect(32px, 5px, auto, 0);
  }

  &:hover,
  :active {
    background: ${TransparentBlack};
    color: ${White};
  }
  &:active {
    box-shadow: inset 0 0 10px 10px ${TransparentBlack};
  }
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TransparentWhite, TransparentBlack, DarkBlue } from '../../globalStyles'

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  @media screen and (max-width: 1105px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.5rem;
    cursor: pointer;
  }
`

export const Nav = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: ${TransparentBlack};
  border: 1px solid ${TransparentWhite};

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1105px) {
    justify-content: flex-start;
  }
`

export const NavSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const NavSectionLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 30px;
  border-left: 1px solid ${TransparentWhite};
  border-right: 1px solid ${TransparentWhite};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 1);
    border-image-source: linear-gradient(0deg, rgba(255, 255, 255, 1) 6%, rgba(0, 0, 0, 0) 6%, rgba(0, 0, 0, 0) 95%, rgba(255, 255, 255, 1) 95%);
    border-image-slice: 1;
    clip: rect(auto, 5px, auto, auto);
  }

  &:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 1);
    border-image-source: linear-gradient(0deg, rgba(255, 255, 255, 1) 6%, rgba(0, 0, 0, 0) 6%, rgba(0, 0, 0, 0) 95%, rgba(255, 255, 255, 1) 95%);
    border-image-slice: 1;
    clip: rect(auto, auto, auto, 334px);
  }

  @media screen and (max-width: 460px) {
    border: none;
    padding: 0 5px 0 10px;
    &:after,
    :before {
      display: none;
    }
  }
`

export const NavLogo = styled.img`
  position: relative;
  @media screen and (max-width: 360px) {
    height: 40px;
  }
  @media screen and (max-width: 300px) {
    height: 35px;
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-item: center;

  @media screen and (max-width: 1105px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    background-color: ${DarkBlue};
    transition: 0.5s;
  }
`
export const NavItem = styled.li`
  display: inline;
  padding: 1.4rem;
  font-family: MuseoSansCyrl-300;
`

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 0.5rem;

  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    opacity: 0.5;
  }
`

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Nav, NavItem, NavList, NavSection, NavSectionLogo, NavLink, NavLogo, MobileIcon } from './NavbarStyels'
import { NavbarData } from '../../data'

export default function Navbar() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  let navigate = useNavigate()

  const closeMobileMenu = (to) => {
    navigate(to)
    setShow(false)
  }

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavSectionLogo>
          <NavLogo src="assets/spacex.png"></NavLogo>
        </NavSectionLogo>

        <NavSection>
          <MobileIcon onClick={handleClick}>{show ? <AiOutlineClose /> : <AiOutlineMenu />}</MobileIcon>

          <NavList show={show}>
            {NavbarData.map((item) => {
              return (
                <NavItem key={item.text}>
                  <NavLink to={item.to} onClick={() => closeMobileMenu(item.to)}>
                    {item.text}
                  </NavLink>
                </NavItem>
              )
            })}
          </NavList>
        </NavSection>
      </Nav>
    </IconContext.Provider>
  )
}

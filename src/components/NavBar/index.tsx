import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = ({ toggle }: any) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              dolla
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                 
                  to="about"
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  to="discover"
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  to="services"
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  to="signup"
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="signin">Signin</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default NavBar;

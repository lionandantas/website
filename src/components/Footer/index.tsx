import React from "react";
import { FaInstagram,FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FotterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialIcons,
  WebsiteRights,
  SocialLogo,
  SocialMediaWrap,
  SocialIconLink
} from "./FooterElements";

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FotterLinkTitle>About Us </FotterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FotterLinkTitle>Contact Us </FotterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FotterLinkTitle>Videos </FotterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FotterLinkTitle>Social Media</FotterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to='/' onClick={toggleHome}>
                      dolla
                  </SocialLogo>
                  <WebsiteRights>
                      dolla © {new Date().getFullYear()} All rights reseverd.
                  </WebsiteRights>
                  <SocialIcons>
                      <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                          <FaFacebook/>
                      </SocialIconLink>
                      <SocialIconLink href='/' target='_blank' arial-label='Instagram'>
                          <FaInstagram/>
                      </SocialIconLink>
                      <SocialIconLink href='/' target='_blank' arial-label='Youtube'>
                          <FaYoutube/>
                      </SocialIconLink>
                      <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                          <FaTwitter/>
                      </SocialIconLink>
                      <SocialIconLink href='/' target='_blank' arial-label='Linkedin'>
                          <FaLinkedin/>
                      </SocialIconLink>
                  </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

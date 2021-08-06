import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  Heading,
  BtnWrap,
  Img,
  ImgWrap,
} from "./InfoSectionElements";
import { Button } from "../ButtonElements";
import ImgHome from "../../images/svg-1.svg";

interface InfoSectionProps {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  imgStart: boolean;
  img: string;
  alt: string;
  dark: boolean;
  dark2: boolean;
  primary: boolean;
  dartText: boolean;
}

const InfoSection = (props: InfoSectionProps) => {
  return (
    <>
      <InfoContainer lightBg={props.lightBg} id={props.id}>
        <InfoWrapper>
          <InfoRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{props.topLine}</TopLine>
                <Heading lightText={props.lightText}>{props.headline}</Heading>
                <Subtitle darkText={props.dartText}>
                  {props.description}
                </Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    primary={props.primary}
                    smooth={true}
                    duration={500}
                    spy={true}
                   
                    offset={-80}
                    dark={props.dark}
                    dark2={props.dark2}
                  >
                    {props.buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={props.img} alt={props.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

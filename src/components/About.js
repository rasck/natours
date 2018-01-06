import React, { Component } from "react";
import {
  Row,
  Column,
  TertiaryHeadLine,
  AboutContainer,
  AboutHeadLine,
  AboutParagraph,
  CenterText,
  AboutButton,
  AboutImage,
  AboutImageContainer
} from "../styles";

const About = ({ main }) => (
  <AboutContainer className="header">
    <CenterText>
      <AboutHeadLine>{main}</AboutHeadLine>
    </CenterText>
    <Row>
      <Column span="1" columns="2">
        <TertiaryHeadLine>
          You are going to fall in love with nature
        </TertiaryHeadLine>
        <AboutParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui.
        </AboutParagraph>
        <TertiaryHeadLine>
          Life adventures you never had before
        </TertiaryHeadLine>
        <AboutParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          nulla deserunt voluptatum nam.
        </AboutParagraph>
        <AboutButton href="#">Learn more &rarr;</AboutButton>
      </Column>
      <Column span="1" columns="2">
        <AboutImageContainer>
          <AboutImage top="-2rem" src="img/nat-1-large.jpg" alt="Photo1" />
          <AboutImage
            top="1.5rem"
            left="40%"
            src="img/nat-2-large.jpg"
            alt="Photo2"
          />
          <AboutImage
            left="20%"
            top="10rem"
            src="img/nat-3-large.jpg"
            alt="Photo3"
          />
        </AboutImageContainer>
      </Column>
    </Row>
  </AboutContainer>
);

export { About };

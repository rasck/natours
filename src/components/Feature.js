import React, { Component } from "react";
import {
  Row,
  Column,
  FeatureContainer,
  FeatureBox,
  FeatureIcon,
  TertiaryHeadLine,
  SecondaryHeadline,
  PrimaryParagraph
} from "../styles";

const Feature = () => (
  <FeatureContainer className="header">
    <Row>
      <Column span="1" columns="4">
        <FeatureBox>
          <FeatureIcon className="icon-basic-world" />
          <TertiaryHeadLine>explore the world</TertiaryHeadLine>
          <PrimaryParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </PrimaryParagraph>
        </FeatureBox>
      </Column>
      <Column span="1" columns="4">
        <FeatureBox>
          <FeatureIcon className="icon-basic-compass" />
          <TertiaryHeadLine>meet nature</TertiaryHeadLine>
          <PrimaryParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </PrimaryParagraph>
        </FeatureBox>
      </Column>
      <Column span="1" columns="4">
        <FeatureBox>
          <FeatureIcon className="icon-basic-map" />
          <TertiaryHeadLine>find you way</TertiaryHeadLine>
          <PrimaryParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </PrimaryParagraph>
        </FeatureBox>
      </Column>
      <Column span="1" columns="4">
        <FeatureBox>
          <FeatureIcon className="icon-basic-heart" />
          <TertiaryHeadLine>live healthier</TertiaryHeadLine>
          <PrimaryParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </PrimaryParagraph>
        </FeatureBox>
      </Column>
    </Row>
  </FeatureContainer>
);

export { Feature };

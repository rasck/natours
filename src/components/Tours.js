import React, { Component } from "react";
import {
  Row,
  Column,
  TourCard,
  TourCardButton,
  TourCardDetail,
  TourCardHeadline,
  TourCardImage,
  TourCardPrice,
  TourCardSubHeadline,
  TourCardSide,
  TourBackSide,
  TourContainer,
  SecondaryHeadline,
  TourCardHeadlineContainer,
  CenterText,
  ThemeButton,
  CenterContainer,
  BackSideContainer,
  PriceBox,
  WhiteButton
} from "../styles";

const orange = {
  dark: "#FF7730",
  light: "#FFB900"
};

const green = {
  dark: "#28B421",
  light: "#7ED56F"
};

const blue = {
  dark: "#5643fa",
  light: "#2998ff"
};

const Tours = () => (
  <TourContainer>
    <Row>
      <CenterText>
        <SecondaryHeadline>Most popular tours</SecondaryHeadline>
      </CenterText>
    </Row>
    <Row>
      <Column span="1" columns="3">
        <TourCard>
          <TourCardSide>
            <TourCardImage src="img/nat-5.jpg" color={orange}>
              <TourCardHeadlineContainer>
                <TourCardHeadline color={orange}>
                  The Sea Explorer
                </TourCardHeadline>
              </TourCardHeadlineContainer>
            </TourCardImage>
            <TourCardDetail>3 day tours</TourCardDetail>
            <TourCardDetail>Up to 30 people</TourCardDetail>
            <TourCardDetail>2 tour guides</TourCardDetail>
            <TourCardDetail>Sleep in cozy hotels</TourCardDetail>
            <TourCardDetail>Difficulty: easy</TourCardDetail>
          </TourCardSide>
          <TourBackSide color={orange}>
            <BackSideContainer>
              <PriceBox>
                <TourCardSubHeadline>only</TourCardSubHeadline>
                <TourCardPrice>$297</TourCardPrice>
              </PriceBox>
              <WhiteButton href="#">Book now!</WhiteButton>
            </BackSideContainer>
          </TourBackSide>
        </TourCard>
      </Column>
      <Column span="1" columns="3">
        <TourCard>
          <TourCardSide>
            <TourCardImage src="img/nat-6.jpg" color={green}>
              <TourCardHeadlineContainer>
                <TourCardHeadline color={green}>
                  The Forest Hiker
                </TourCardHeadline>
              </TourCardHeadlineContainer>
            </TourCardImage>
            <TourCardDetail>7 day tours</TourCardDetail>
            <TourCardDetail>Up to 40 people</TourCardDetail>
            <TourCardDetail>6 tour guides</TourCardDetail>
            <TourCardDetail>Sleep in provided tents</TourCardDetail>
            <TourCardDetail>Difficulty: medium</TourCardDetail>
          </TourCardSide>
          <TourBackSide color={green}>
            <BackSideContainer>
              <PriceBox>
                <TourCardSubHeadline>only</TourCardSubHeadline>
                <TourCardPrice>$497</TourCardPrice>
              </PriceBox>
              <WhiteButton href="#">Book now!</WhiteButton>
            </BackSideContainer>
          </TourBackSide>
        </TourCard>
      </Column>
      <Column span="1" columns="3">
        <TourCard>
          <TourCardSide>
            <TourCardImage src="img/nat-7.jpg" color={blue}>
              <TourCardHeadlineContainer>
                <TourCardHeadline color={blue}>
                  The Snow Adventurer
                </TourCardHeadline>
              </TourCardHeadlineContainer>
            </TourCardImage>
            <TourCardDetail>7 day tours</TourCardDetail>
            <TourCardDetail>Up to 15 people</TourCardDetail>
            <TourCardDetail>3 tour guides</TourCardDetail>
            <TourCardDetail>Sleep in provided tents</TourCardDetail>
            <TourCardDetail>Difficulty: hard</TourCardDetail>
          </TourCardSide>
          <TourBackSide color={blue}>
            <BackSideContainer>
              <PriceBox>
                <TourCardSubHeadline>only</TourCardSubHeadline>
                <TourCardPrice>$600</TourCardPrice>
              </PriceBox>
              <WhiteButton href="#">Book now!</WhiteButton>
            </BackSideContainer>
          </TourBackSide>
        </TourCard>
      </Column>
    </Row>
    <CenterText>
      <ThemeButton href="#">See more tours!</ThemeButton>
    </CenterText>
  </TourContainer>
);
export { Tours };

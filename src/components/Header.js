import React, { Component } from "react";
import {
  HeaderContainer,
  LogoContainer,
  LogoStyle,
  HeadLineContainer,
  HeadlineMain,
  HeadLineSub,
  TextBox,
  HeaderButton
} from "../styles";

const Header = ({ main, sub, imgsrc, alt }) => (
  <HeaderContainer className="header">
    <LogoContainer className="header__logo-box">
      <LogoStyle className="header_logo" src={imgsrc} alt={alt} />
    </LogoContainer>
    <TextBox className="textBox">
      <HeadLineContainer className="headLine">
        <HeadlineMain className="headLine--Main">{main}</HeadlineMain>
        <HeadLineSub className="headLine--Sub">{sub}</HeadLineSub>
      </HeadLineContainer>
      <HeaderButton href="#" className="btn btn--white btn--tour">
        Discover our tours
      </HeaderButton>
    </TextBox>
  </HeaderContainer>
);

export { Header };

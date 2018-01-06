import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Header } from "../components";
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

import { FullGrid } from "./grid";

storiesOf("Header", module).add("Full Header", () => (
  <Header
    main="Outdoors"
    sub="is where life happens"
    imgsrc="/img/logo-white.png"
    alt="logo"
  />
));

storiesOf("HeaderButton", module).add("Header Button", () => (
  <div style={{ height: "100vh", backgroundColor: "mediumseagreen" }}>
    <TextBox>
      <HeaderButton href="#">Discover our tours</HeaderButton>
    </TextBox>
  </div>
));

storiesOf("Grid", module).add("Large grid example", () => <FullGrid />);

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));

// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("with some emoji", () => (
//     <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
//   ));

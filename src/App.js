import React, { Component } from "react";
import {
  Header,
  About,
  Feature,
  Tours,
  Stories,
  Booking,
  Footer,
  Navigation,
  PopUp
} from "./components";
import {
  GreenTheme,
  DarkTheme,
  BlueTheme,
  OrangeTheme
} from "./styles/utility/themes";
import { ThemeProvider } from "styled-components";
import { globalStyle } from "./styles/utility/global-style";
import { Row, Column } from "./styles/grid";

const MainTheme = GreenTheme;

globalStyle(MainTheme);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <div>
          <Navigation />
          <PopUp />
          <Header
            main="Outdoors"
            sub="is where life happens"
            imgsrc="/img/logo-white.png"
            alt="logo"
          />
          <main>
            <About main="Exciting tours for adventurous people" />
            <Feature />
            <Tours />
            <Stories />
            <Booking />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

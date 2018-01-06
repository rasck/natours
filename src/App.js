import React, { Component } from "react";
import { Header, About, Feature, Tours } from "./components";
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
      <div className="Container">
        <ThemeProvider theme={MainTheme}>
          <Header
            main="Outdoors"
            sub="is where life happens"
            imgsrc="/img/logo-white.png"
            alt="logo"
          />
        </ThemeProvider>
        <main>
          <ThemeProvider theme={MainTheme}>
            <About main="Exciting tours for adventurous people" />
          </ThemeProvider>
          <ThemeProvider theme={MainTheme}>
            <Feature />
          </ThemeProvider>
          <ThemeProvider theme={MainTheme}>
            <Tours />
          </ThemeProvider>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;

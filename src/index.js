import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import customTheme from "./theme";
ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    {/* <ColorModeScript initialColorMode={customTheme.config.initialColorMode} /> */}

    <App />
  </ChakraProvider>,
  document.getElementById("root")
);

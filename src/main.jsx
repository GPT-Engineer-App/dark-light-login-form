import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, GlobalStyle } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#282a36",
    800: "#44475a",
    700: "#6272a4",
    600: "#8be9fd",
    500: "#50fa7b",
    400: "#ffb86c",
    300: "#ff79c6",
    200: "#bd93f9",
    100: "#ff5555",
  },
  background: "#282a36",
  text: "#f8f8f2",
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyle styles={{ "*": { userSelect: "none" } }} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

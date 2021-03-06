import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      1: "#092038",
      2: "#1a202c",
    },
    secondary: {
      1: "red",
      2: "#1a202c",
    },
    accent: {
      1: "#f7fafc",
      2: "#1a202c",
    },
    other: {
      1: "#f7fafc",
      2: "#1a202c",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />{" "}
    </ChakraProvider>
  );
}

export default MyApp;

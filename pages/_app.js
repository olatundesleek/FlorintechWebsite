import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "../styles/globals.css";
export const appContext = React.createContext(false);

import { extendTheme } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { MessengerChat } from "react-messenger-chat-plugin";
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
    // <appContext.Provider>
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <MessengerChat
        pageId="575806952943547"
        language="sv_SE"
        themeColor={"#000000"}
        bottomSpacing={300}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={"show"}
        debugMode={true}
      />
      
      <Component {...pageProps} />
    </ChakraProvider>
    // </appContext.Provider>
  );
}

export default MyApp;

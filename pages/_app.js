import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "../styles/globals.css";
export const appContext = React.createContext(false);

import { extendTheme } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import { useRouter } from 'next/router'
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};





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
 
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('2779571125594393') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])


  return (
   
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
 
      
      <Component {...pageProps} />
    </ChakraProvider>
    // </appContext.Provider>
  );
}

export default MyApp;

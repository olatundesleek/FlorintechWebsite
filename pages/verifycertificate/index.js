import { Box } from "@chakra-ui/react";
import Header from "../../Components/Header";
import Verification from "../../Components/Verification";
import Head from "next/head";
import Footer from "../../Components/Footer";

function Verifycertificate() {
  return (
    <Box>
      <Head>
        <title>verify certificate | Florintech Computer College</title>
        <meta
          name="Florintech Computer College"
          
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Verification />
      <Footer />
    </Box>
  );
}

export default Verifycertificate;

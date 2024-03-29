import { Box } from "@chakra-ui/react";
import Header from "../../Components/Header";
import Verification from "../../Components/Verification";
import Head from "next/head";
import Footer from "../../Components/Footer";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

function VerifyCertificate() {
  return (
    <Box>
       <DefaultSeo  {...SEO} 
        title="Verify Certificate | Florintech computer college"
        description="Florintech Computer College Certificate Verification"
        canonical = 'https://www.florintechcomputercollege.com/verifycertificate/'
        openGraph={{
          url: "https://www.florintechcomputercollege.com/verifycertificate/",
          title: "Verify Certificate | Florintech Online Registeration",
          description: "Florintech computer college Certificate Verification",

          siteName: "Florintech Computer College",
        }}
       
        />
      <Head>
        <title>verify certificate | Florintech Computer College</title>
        <meta
          name="Florintech Computer College"
          
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Verification />
      <Footer />
    </Box>
  );
}

export default VerifyCertificate;

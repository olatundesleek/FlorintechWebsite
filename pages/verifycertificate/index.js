import { Box } from "@chakra-ui/react";
import Header from "../../Components/Header";
import Verification from "../../Components/Verification";
import Head from "next/head";

function Verifycertificate() {


 
  return (
    <Box>
    <Head>
    <title>verify certificate | Florintech Computer College</title>
    <meta
      name="Florintech Computer College"
      content="Generated by create next app"
    />
    <link rel="icon" href="/favicon.png" />
    </Head>
    <Header/>
    <Verification />
    
    { console.log(process.env.NEXT_PUBLIC_GREETING)}
   
  </Box>);
 }

export default Verifycertificate
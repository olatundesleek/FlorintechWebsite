import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Certificate from "../../Components/Certificate";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";


 
  function Verified() {
    const router = useRouter();
    
    const [studentDetails, setStudentDetails] = useState({});
    const [isVerified, setIsVerified] = useState(false);
    useEffect(() => {
      let studentCertDetails = JSON.parse(localStorage.getItem("studentcert"));
  
      if (studentCertDetails == null){
        router.push("/verifycertificate");
      }else {
        setStudentDetails(studentCertDetails)
        setIsVerified(true)
        localStorage.removeItem("studentcert")
      }
     
  
     
    }, []);
   
     const {
       firstName,
       middleName,
       lastName,
       course,
       duration,
       passportImg,
       certNum,
       completionDate
     } = studentDetails;
    
  return (
    <Box>
     
      <Header />
      <Flex justifyContent="center">
      {isVerified ?  <Certificate firstName={firstName} middleName={middleName} lastName={lastName} course={course} passport={passportImg} duration={duration} certNum={certNum} completionDate={completionDate} />:""}
      </Flex>
      <Footer />
    </Box>
  );
}

export default Verified;

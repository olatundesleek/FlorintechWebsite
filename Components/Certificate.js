import { Box,Flex } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'
import logo from "../assets/logo.png";
import signature from "../assets/signature.png";
function Certificate({firstName,middleName,lastName,course,
  duration,
  passport,
  certNum,completionDate}) {
  return (

   <Flex justifyContent="center" m={20}>
        {console.log(completionDate)}
 <Box className="overall">
      <Box className="first-border"></Box>

      <Box className="container">
        <Box className="blue-con"></Box>
        <Box className="orange-con1"></Box>
        <Box className="orange-con2"></Box>
        <Box className="holder">
          <Flex justifyContent="space-between" alignItems="center" textAlign="center">

          <Box className="logo">
              <Image src={logo} alt="logo" width="250px" height="100px" />
            </Box>
           <Box className="passport" border="1px solid red">
              <Image src={"https://admin.florintechcomputercollege.com/"+passport} width="250px" height="100px" alt="passport" className="passport"  />
            </Box>
          </Flex>
          <Box className="logo-photo-cotainer">
            
            <Box className="certi">
              <Box>CERTIFICATE</Box>
              <span>OF EXCELLENCE</span>
          <h3 className="proud">PROUDLY PRESENTED TO</h3>
            </Box>
           
          </Box>

          <Box className="user-name">
            <span>{firstName} {middleName}{lastName}</span>
            <hr />
          </Box>
          <Box className="comment">
            <p>
            This is to certify that the above person has duly completed a {duration} course in &nbsp;
           <strong> {course}</strong>
            </p>
            {/* <span> </span> */}
          </Box>
          <Box className="date-signature">
            <Box className="date">
              <span>{completionDate}</span>
              <hr />
              <span>DATE</span>
            </Box>
            <Box className="signature">
             <span style={{textAlign:"center",display:"flex", justifyContent:"center"}}>
             <Image src={signature} width="80px" height="20px" color='black' fontWight='500'/>
             </span>
              <hr />
              <span>signed by Olatunde Oladipo</span>
            </Box>
          </Box>
        </Box>
        <Box className="orange2"></Box>
        <Box className="orange1"></Box>
        <Box className="blue-con2"></Box>
      </Box>
      <Box className="first-border2"></Box>
    </Box>


   </Flex>
  )
}

export default Certificate
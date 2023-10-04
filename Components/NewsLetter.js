import React, { useState } from "react";
import { Box, Button, Flex, Text, But, textDecoration } from "@chakra-ui/react";
import { BsPlayCircle } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const url =
  "https://florintechcomputercollege.us11.list-manage.com/subscribe/post?u=4944c00554cd45873e202b0ae&amp;id=95058db00b&amp;f_id=001896e0f0";
const NewsLetter = () => {
  const SimpleForm = () => <MailchimpSubscribe url={url} />;
 
  return (
  
      <Flex className="newsletter">
        <Box
          align="center"
          // m={{ base: 5, sm: 5, md: 3, lg: 3 }}
          // className="course-container"
        >
          {/* <h2>NEWSLETTER</h2> */}
          <p>keep up with our latest news and event and offers,subscribe to our newsletter</p>
      
          <Flex justifyContent="flex-end" flex="auto" >
            <Box textAlign="left"  flex="auto">
             

              <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
            </Box>
          </Flex>
        </Box>
      </Flex>
   
  );
};

export default NewsLetter;

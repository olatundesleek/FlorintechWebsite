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
  // const [userEmail, setuserEmail] = useState("");
  // const [subscribeMessage, setsubscribeMessage] = useState("");
  // let bodyContent = new FormData();
  // const handleChange = (e) => {
  //   setuserEmail(e.target.value);
  //   console.log(userEmail);

  //   bodyContent.append("email", e.target.value);
  // };

  //
  // const subscribe = () => {
  //   fetch(url, {
  //     method: "POST",
  //     body: bodyContent,
  //   })
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((msg) => {
  //       console.log(msg);
  //     });
  // };
  return (
    <>
      <Box>
        <Flex
          justify="between"
          align="center"
          m={{ base: 5, sm: 5, md: 3, lg: 3 }}
          className="course-container"
        >
          <Flex m={0} padding={10} className="browse-course">
            <Box className="browse-title">
              <h1>Blog</h1>
              <Text fontSize="xl" className="browse-text">
                visit our&nbsp;
                <span style={{ textDecoration: "underline" }}>
                  <Link href="https://blog.florintechcomputercollege.com">
                    blog
                  </Link>
                </span>
                &nbsp;for exciting tech related news
              </Text>
            </Box>
          </Flex>
          <Box 
            className="course-message newsletter"
            boxShadow="md"
            rounded="md"
            bg="white"
          >
            <Flex m={2} className="join-message">
              <Box>
                <BiEnvelope fontSize={20} className="newsletter-icons" />
              </Box>
              <Box className="browse-title" ml={10}>
                <h1>Join our email newsletter</h1>
                <Text fontSize="15px" className="browse-text-text">
                  subscribe to our newsletter to receive exciting mails about
                  promos and offers
                </Text>
              </Box>
            </Flex>
           
          
            <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NewsLetter;

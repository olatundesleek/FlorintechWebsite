import { Box, Input, Flex, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Certificate from "./Certificate";
import axios, { isCancel, AxiosError } from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Banner from "../Components/Banner";

function Verification() {
  const [isBot, setisBot] = useState(true);

  async function onCaptchaChange(token) {
    console.log(token);
    if (token !== null) {
      setisBot(false);
    } else {
      setisBot(true);
    }

    // call to verify token from user token from google

    // let reCaptchaResponse = await axios({
    //   method: "post",
    //   url: `https://www.google.com/recaptcha/api/siteverify`,
    //   withCredentials: false,
    //   params: {
    //     secret: "6Lcv9WIkAAAAAEzbavXoe83h8G6nHDiXPbyQq1QB",
    //     response: token,
    //   },
    // }).then(function (response) {
    //   console.log(response);
    //   if (response.data.success == true) {
    //     setisBot(false);
    //   } else {
    //     setisBot(true);
    //   }
    // });
  }
  const router = useRouter();

  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [certificateAvailable, setCertificateAvailable] = useState(false);

  let certificateNo;

  const handleChange = (event) => {
    certificateNo = event.target.value;

  };
  // function to make an api call
  const verifyCert = async () => {
    setIsVerifying(true);

    let bodyContent = new FormData();
    bodyContent.append("cert_number", certificateNo);

    console.log("this is the cern nunmber" + bodyContent.values);
    // cert_number:"229906MN",
    // let verificationResponse = await fetch(
    //   `https://florintechcomputercollege.com/api/api_verifycertificate.php`,
    //   {
    //     method: "POST",

    //     body: bodyContent,
    //   }
    // );
    let verificationResponse = await fetch(
      `https://florintechcomputercollege.com/api/api_verifycertificate.php`,
      
      {
        method: "POST",

        body: bodyContent,
      }
    );

    let data = await verificationResponse.json();
    console.log(data);
    if (data.error) {
      setCertificateAvailable(false);
      setError(true);
      setErrorMessage(data.error);
    } else {
      console.log(data.date_of_completion);

      let studentCertificateInfo = {
        firstName: data.firstname,
        middleName: data.middle_name,
        lastName: data.lastname,
        course: data.course,
        duration: data.course_duration,
        passportImg: data.passport,
        certNum: data.certificate_no,
        completionDate: data.date_of_completion,
      };
      localStorage.setItem(
        "studentcert",
        JSON.stringify(studentCertificateInfo)
      );
      setError(false);
      setCertificateAvailable(true);
      router.push("/verifycertificate/verified");
    }

    setIsVerifying(false);
  };
  return (
    <Box>
      <Banner
        pageName="Verify Certificate"
        pageDetails="Enter student certificate numer to verify student certificate"
      />
      <Box m={20}>
        <Flex justifyContent="center">
          <Box>
            <Flex justifyContent="center">
              <Box className="verification">
                <Box className="verification-title">
                  <Text fontSize="30px">Verify Certificate</Text>
                </Box>
                <Text className="text">Certificate Number</Text>
                <form>
                  <Input
                    required
                    disabled={isBot}
                    autoComplete="true"
                    marginTop={5}
                    maxWidth={300}
                    onChange={handleChange}
                    placeholder="Enter Certificate Number"
                    variant="outline"
                    color="black"
                    fontWeight="bolder"
                    mb={7}
                  />
                  <ReCAPTCHA
                    sitekey="6Lcv9WIkAAAAAOFni6Z8dVRJ7QUsJdHsgFjNZ4QA"
                    // {process.env.NEXT_PUBLIC_CAPTCHASITEKEY}
                    onChange={onCaptchaChange}
                  />
                  {error ? (
                    <Text m={5} className="error">
                      {errorMessage}
                    </Text>
                  ) : (
                    ""
                  )}

                  {isVerifying ? (
                    <Button
                      disabled={isBot}
                      variant="outline"
                      isLoading
                      onClick={verifyCert}
                      m={3}
                      textAlign="center"
                      loadingText="verifying.."
                      colorScheme="teal"
                    >
                      Verify
                    </Button>
                  ) : (
                    <Button
                      isDisabled={isBot}
                      variant="outline"
                      onClick={verifyCert}
                      m={3}
                      textAlign="center"
                      colorScheme="teal"
                    >
                      Verify
                    </Button>
                  )}
                </form>
              </Box>
            </Flex>
          </Box>
        </Flex>
        {/* {certificateAvailable ?  <Certificate />: ""} */}
      </Box>
    </Box>
  );
}

export default Verification;

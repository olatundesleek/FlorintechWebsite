import { Box, Input, Flex, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Certificate from "./Certificate";
import axios, { isCancel, AxiosError } from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function Verification() {
  const SECRET = "6LcNXykaAAAAAPBGLmn0ot_lm3GpZUqTUj5YLeI-";
  const [isBot, setisBot] = useState(true);

  function getBody(token) {
    return { secret: SECRET, response: token };
  }

  async function onChange(token) {
    let reCaptchaResponse = await axios({
      method: "post",
      url: `https://www.google.com/recaptcha/api/siteverify`,
      withCredentials: false,
      params: {
        secret: "6Lcv9WIkAAAAAEzbavXoe83h8G6nHDiXPbyQq1QB",
        response: token,
      },
    }).then(function (response) {
      console.log(response);
      if (response.data.success == true) {
        setisBot(false);
      } else {
        setisBot(true);
      }
    });
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

    let response = await axios.post(
      `https://florintechcomputercollege.com/api/api_verifycertificate.php`,
      {
        // cert_number:"229906MN",
        method: "POST",

        body: bodyContent,
      }
    );

    let data = await response.json();

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
      <Flex justifyContent="center">
        <Box>
          <Flex justifyContent="center">
            <Box className="verification">
              <Box className="verification-title">
                {" "}
                <Text fontSize="30px">Verify Certificate</Text>
              </Box>
              <Text className="text">Certificate Number</Text>
              <Input
                autoComplete="true"
                marginTop={5}
                maxWidth={300}
                onChange={handleChange}
                placeholder="Enter Certificate Number"
                variant="outline"
                color="black"
                fontWeight="bolder"
              />
              <ReCAPTCHA
                sitekey="6Lcv9WIkAAAAAOFni6Z8dVRJ7QUsJdHsgFjNZ4QA"
                onChange={onChange}
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
                  m={20}
                  textAlign="center"
                  loadingText="verifying.."
                  colorScheme="teal"
                >
                  Verify
                </Button>
              ) : (
                <Button
                  disabled={isBot}
                  variant="outline"
                  onClick={verifyCert}
                  m="40px"
                  textAlign="center"
                  colorScheme="teal"
                >
                  Verify
                </Button>
              )}
            </Box>
          </Flex>
        </Box>
      </Flex>
      {/* {certificateAvailable ?  <Certificate />: ""} */}
    </Box>
  );
}

export default Verification;

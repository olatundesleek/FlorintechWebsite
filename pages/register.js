import {
  Box,
  Input,
  Button,
  Flex,
  Heading,
  Select,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import axios, { isCancel, AxiosError } from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import Banner from "../Components/Banner";
import Header from "../Components/Header";
import images from "../Components/images.json";
import Footer from "../Components/Footer";
import { useState } from "react";
const desktoppublishingImg = images[1].desktoppublishing;

const intialValue = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  course: "",
  session: "",
};

function Register() {
  const [isBot, setisBot] = useState(true);

  async function onCaptchaChange(token) {
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

  const [inputs, setInputs] = useState(intialValue);
  const [selected, setSelected] = useState();
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = inputs;
    let selectedValue = selected;
    console.log(inputValue);
    console.log(selectedValue);
  };
  return (
    <Box>
      <Header />
      <Banner
        pageName="Register"
        pageDetails="Register online for your prefered course"
      />

      <Flex justifyContent="center" bg="gray.200" w="100%">
        <Flex
          bg={"grey"}
          w="70%"
          width={{ base: "100%", md: "70%" }}
          m={7}
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            className="register"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              xl: "row",
            }}
          >
            <Box
              className="register-img"
              backgroundImage={desktoppublishingImg}
            >
              {/* <Box className="register-con"></Box> */}
            </Box>
            <Box className="register-form" m={5}>
              <Heading as="h2" size="xl" color="white" m={5}>
                Register
              </Heading>
              <form className="form" onSubmit={handleSubmit}>
                <Input
                  placeholder="Enter your Firstname"
                  name="firstname"
                  value={inputs.firstname}
                  required
                  onChange={handleChange}
                />

                <Input
                  placeholder="Enter your lastname"
                  color="white"
                  required
                  name="lastname"
                  value={inputs.lastname}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Phone number"
                  name="number"
                  value={inputs.number}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Enter your Email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
                <Select
                  placeholder="Select course"
                  mb={5}
                  name="course"
                  value={inputs.course}
                  onChange={handleChange}
                >
                  <option value="Diploma In Office Application">
                    Diploma In Office Application
                  </option>
                  <option value="Diploma In Business Electronic Accounting">
                    Diploma In Business Electronic Accounting
                  </option>
                  <option value="Advance Diploma In Information MGT">
                    Advance Diploma In Information MGT
                  </option>
                  <option value="Diploma In Deskstop Publishing">
                    Diploma In Deskstop Publishing
                  </option>
                  <option value="Certified Desktop Publishing">
                    Certified Desktop Publishing
                  </option>
                  <option value="Certified Graphics Professional">
                    Certified Graphics Professional
                  </option>
                  <option value="Autocad Specialist">Autocad Specialist</option>
                  <option value="Diploma In Digital Media">
                    Diploma In Digital Media
                  </option>
                  <option value="Advance In Digital Medial">
                    Advance In Digital Medial{" "}
                  </option>
                  <option value="Advance In Digital Media And Web Development">
                    Advance In Digital Media And Web Development
                  </option>
                  <option value=" Website Development Frontend">
                    Website Development Frontend
                  </option>
                  <option value="Python Data-Science">
                    Python Data-Science
                  </option>
                </Select>
                <Box>
                  <Heading as="h6" size="md" color="white">
                    select session
                  </Heading>
                  <RadioGroup>
                    <Stack direction="column">
                      <Radio
                        value="Morning(9am-12:30pm)"
                        onChange={handleSelected}
                        checked={selected === "Morning(9am-12:30pm)"}
                      >
                        Morning(9am-12:30pm)
                      </Radio>
                      <Radio
                        value="Afternoon(1pm-4pm)"
                        onChange={handleSelected}
                        checked={selected === "Afternoon(1pm-4pm)"}
                      >
                        Afternoon(1pm-4pm)
                      </Radio>
                      <Radio
                        value="Evening(5;30pm-7pm)"
                        onChange={handleSelected}
                        checked={selected === "Evening(5;30pm"}
                      >
                        Evening(5;30pm-7pm)
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <ReCAPTCHA
                  sitekey="6Lcv9WIkAAAAAOFni6Z8dVRJ7QUsJdHsgFjNZ4QA"
                  onChange={onCaptchaChange}
                />
                <Button colorScheme="blue" type="submit" disabled={isBot}>
                  Register
                </Button>
              </form>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}

export default Register;

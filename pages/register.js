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
import { ToastContainer, toast } from "react-toastify";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import { courseImages } from "../Components/images";
import Footer from "../Components/Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const intialValue = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  course: "",
  session: "",
  recaptcharesponse: "",
};

function Register() {
  const [isBot, setisBot] = useState(true);
  const [loading, setLoading] = useState(false);

  async function onCaptchaChange(userToken) {
    setInputs((current) => ({
      ...current,
      recaptcharesponse: userToken,
    }));

    if (userToken !== null) {
      setisBot(false);
    } else {
      setisBot(true);
    }
  }

  const [inputs, setInputs] = useState(intialValue);
  const [selected, setSelected] = useState();
  const handleSelected = (e) => {
    setSelected(e.target.value);
    setInputs((current) => ({
      ...current,
      session: e.target.value,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let inputValue = inputs;
    let data = inputValue;

    let bodyContent = new FormData();

    bodyContent.append("firstname", inputs.firstname);
    bodyContent.append("lastname", inputs.lastname);
    bodyContent.append("email", inputs.email);
    bodyContent.append("phonenumber", inputs.phonenumber);
    bodyContent.append("course", inputs.course);
    bodyContent.append("session", inputs.session);
    bodyContent.append("recaptcharesponse", inputs.recaptcharesponse);

    fetch("https://florintechcomputercollege.com/api/api_register.php", {
      method: "POST",
      body: bodyContent,
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setLoading(false);
        if (res.error) {
          toast.error(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.success(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };
  return (
    <Box>
      <DefaultSeo
        title="Register | Florintech computer college"
        description="This is an online registeration page for new florintech computer college students"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/register/",
          title: "Florintech Online Registeration",
          description: "Florintech Online Registeration",

          siteName: "Florintech Computer College",
        }}
       
      />
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
              backgroundImage={courseImages.desktoppublishing}
            >
              {/* <Box className="register-con"></Box> */}
            </Box>
            <Box className="register-form" m={5}>
              <Heading as="h2" size="xl" color="white" m={5}>
                Register
              </Heading>
              <form className="form" onSubmit={handleSubmit}>
                <Input
                  color="white"
                  placeholder="Enter your Firstname"
                  name="firstname"
                  _placeholder={{ color: "white" }}
                  value={inputs.firstname}
                  required
                  onChange={handleChange}
                />

                <Input
                  placeholder="Enter your lastname"
                  color="white"
                  required
                  name="lastname"
                  _placeholder={{ color: "white" }}
                  value={inputs.lastname}
                  onChange={handleChange}
                />
                <Input
                  required
                  color="white"
                  placeholder="Phone number"
                  _placeholder={{ color: "white" }}
                  name="phonenumber"
                  value={inputs.number}
                  onChange={handleChange}
                />
                <Input
                  color="white"
                  placeholder="Enter your Email"
                  name="email"
                  _placeholder={{ color: "white" }}
                  value={inputs.email}
                  onChange={handleChange}
                />
                <Select
                  required
                  className="course-select"
                  color="white"
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
                        required
                        value="Morning(9am-12:30pm)"
                        onChange={handleSelected}
                        checked={selected === "Morning(9am-12:30pm)"}
                      >
                        Morning(9am-12:30pm)
                      </Radio>
                      <Radio
                        required
                        value="Afternoon(1pm-4pm)"
                        onChange={handleSelected}
                        checked={selected === "Afternoon(1pm-4pm)"}
                      >
                        Afternoon(1pm-4pm)
                      </Radio>
                      <Radio
                        required
                        value="Evening(5;30pm-7pm)"
                        onChange={handleSelected}
                        checked={selected === "Evening(5;30pm"}
                      >
                        Evening(5:30pm-7pm)
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box margin="20px 0px">
                  <ReCAPTCHA
                    sitekey="6Lcv9WIkAAAAAOFni6Z8dVRJ7QUsJdHsgFjNZ4QA"
                    onChange={onCaptchaChange}
                  />
                </Box>
                <Button
                  isLoading={loading}
                  loadingText="Registering"
                  colorScheme="blue"
                  type="submit"
                  isDisabled={isBot}
                >
                  Register
                </Button>
              </form>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
      <ToastContainer />
    </Box>
  );
}

export default Register;

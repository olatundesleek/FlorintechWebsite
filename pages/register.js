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
import React, { useState } from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
const intialValue = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  course: "",
  session: "",
};
function Register() {
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
        pageDetails="this is a test content to follow conract us"
      />

      <Flex justifyContent="center" bg="gray.200" w="100%">
        <Flex
          bg="gray"
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
            <Box className="register-img" bg="blue.100">
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

                <Button colorScheme="blue" type="submit">
                  Register
                </Button>
              </form>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Register;

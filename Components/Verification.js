import { Box, Input, Flex, Text, Button } from "@chakra-ui/react";
import {useState} from "react";

function Verification ()  {
   
    const [isVerifying, setIsVerifying] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    let certificateNo; 
    
    const handleChange = (event) => {
      certificateNo = event.target.value;
    };
    // function to make an api call
    const verifyCert = async () => {
      console.log(certificateNo);
      setIsVerifying(true);
  
      console.log(isVerifying);
      let bodyContent = new FormData();
      bodyContent.append("cert_number", certificateNo);
  
      let response = await fetch(
        `https://florintechcomputercollege.com/api/api_verifycertificate.php`,
        {
          // cert_number:"229906MN",
  
          method: "POST",
  
          body: bodyContent,
        }
      );
  
      let data = await response.json();
      console.log(data);
  
      if(data.error){
        setError(true)
       setErrorMessage(data.error)
        console.log("na himm"+ errorMessage);
      }
      else {
        setError(false)
      }
  
      setIsVerifying(false);
    };
return (
    <Box>
    
    <Flex justifyContent="center">
      <Box>
<Flex justifyContent="center">
<Box className="verification">
          <Box className="verification-title"> <Text fontSize="30px">Verify Certificate</Text></Box>
       <Text className="text">Certificate Number</Text>
        <Input
        
        marginTop={5}
        maxWidth={300}
          onChange={handleChange}
          placeholder="Enter Certificate Number"
          variant="outline"
          color="black"
          fontWeight="bolder"
        />
       {error ? <Text m={5} className="error">{errorMessage}</Text>: ""}
        {isVerifying ? (
          <Button
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
  </Box>

)


}

export default Verification;

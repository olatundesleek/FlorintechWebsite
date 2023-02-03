import { Box, Input } from '@chakra-ui/react'
import React from 'react'
import Banner from '../Components/Banner';
import Header from '../Components/Header'

function register() {
  return (
    <Box>
        <Header />
        <Banner pageName="Register" pageDetails="this is a test content to follow conract us"/>


        <Box>
        <Box className='register-img'></Box>
        <Box className='register-form'>
            <form>

        <Input placeholder='Enter your Firstname' />

       <Input placeholder='Enter your lastname' />
      <Input placeholder='Phone number' />
        <Input placeholder='Enter your Email' />

            </form>

        </Box>
    </Box>
    </Box>
  )
}

export default register
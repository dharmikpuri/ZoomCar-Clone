import React from 'react'
import { Box,Text,Image,Container,Center, Heading,VStack,Select } from '@chakra-ui/react'
const Home = () => {
  return (
    <div>
      <Box>
       <Image src="https://www.zoomcar.com/img/background.png" alt='HomeBanner'/>
      </Box>
      <Box>
       <Container>
         <Center>
        <VStack>
        <Text as="h3" style={{fontSize:'24px', fontWeight:"400"}} >
         Oops! Looks like we don’t serve in your city
         </Text>
         <Heading>
         Select a different Location
         </Heading>
         <Box>
         <Select placeholder='Select option' size={"lg"} width={"500px"}>
      <option value='option1'>Option 1</option>
     <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
       </Select>
         </Box>
        </VStack>
         

         </Center>
       </Container>
      </Box>

    </div>
  )
}

export default Home
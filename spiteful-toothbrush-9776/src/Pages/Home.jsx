import React from 'react'
import { Box,Text,Image,Container,Center, Heading } from '@chakra-ui/react'
const Home = () => {
  return (
    <div>
      <Box>
       <Image src="https://www.zoomcar.com/img/background.png" alt='HomeBanner'/>
      </Box>
      <Box>
       <Container>
         <Center>
         <Text as="h3" style={{fontSize:'24px', fontWeight:"400"}} >
         Oops! Looks like we don’t serve in your city
         </Text>
         <Heading>
            
         </Heading>
         </Center>
       </Container>
      </Box>

    </div>
  )
}

export default Home
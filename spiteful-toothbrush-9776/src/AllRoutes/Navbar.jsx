import React from 'react'
import {NavLink} from "react-router-dom"
import { Box,Text,Image,Container,Center, Heading,VStack,Select,Spacer } from '@chakra-ui/react'
const link=[
    // {path:"/",title:"Home"}
    {path:"/about",title:"About"},
    {path:"/blog",title:"Blog"},
    {path:"/career",title:"Career"},
    {path:"/helpSupport",title:"HelpSuppory"}
]
const Navbar = () => {
  return (
    <div>
        <Container maxW={"1240px"}  mt={"100px"} bg={'black'} color={"white"}>
            <Center justifyContent={"space-around"} display={'flex'} fontSize={"25px"} p={"10px"}>
                {link.map((item) =>(
                  <Box> <Spacer/>
                      <NavLink to={item.path}>{item.title}</NavLink> 
                  </Box>
                ))}
            </Center>

        </Container>
    </div>
  )
}

export default Navbar
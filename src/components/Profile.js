import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Icon, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import {DiAndroid , DiCodeigniter, DiReact, DiWebplatform} from "react-icons/di";
export default function Profile() {


    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
        w="100%" maxWidth={{ base : "100vh" , md : "130vh" , lg:"130vh" , xl : "130vh "}}>
            <Box alignSelf="center" px="32" py="16">
                 <Heading fontWeight="extrabold" color="cyan.500" size="4xl">7+</Heading>
                 <Text fontSize="2xl" color="gray.400">Years of Experience </Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Product Desginer , Developer , specialized in mobile development</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh"
                    justify="flex-end" onClick={onOpen}>
                        <Icon color="white" p="4" as = {DiAndroid} w="24" h="24" onClick={onOpen} /> 
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Machine Learning
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.100" h="30vh" w="30vh"
                    justify="flex-end" _hover={{ bg : "green.400"}} onClick={onOpen}>
                        <Icon color="black" p="4" as = {DiCodeigniter} w="24" h="24" /> 
                        <Icon color="black" p="4" as = {DiReact} w="24" h="24" /> 
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            React Native & Flutter Apps 
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.100" h="30vh" w="30vh"
                    justify="flex-end" _hover={{ bg : "green.400"}} onClick={onOpen}>
                        <Icon color="black" p="4" as = {DiWebplatform} w="24" h="24" /> 
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Web Apps 
                        </Text>
                    </Flex>
                    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
                </Flex>
            </Box> 

        </Flex>
    )
}

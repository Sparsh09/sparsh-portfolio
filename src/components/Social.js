import { Box, Divider, Flex, Heading, HStack, Icon, Progress, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import {FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Social() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <VStack>
            
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="250px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                    
            <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start' mr={30} w="100">
                <Heading>A little about me,</Heading>
                <Divider h={8} />
                <Heading size="lg">Hello!</Heading>
                <Divider h={10} orientation='vertical' />
                <Text fontSize="2xl">My name is Sparsh Mehta. I'm deeply passionate about software development & machine learning.</Text>
            </Box>    
            <Box mt={isNotSmallerScreen ? "0" : 20} align='flex-start'>
                <Heading>My SKills</Heading>
                <Divider h={12} orientation='vertical' />
                <Heading mb={4} as="h6" size="md" mt={3}>Machine Learning</Heading>
                <Progress colorScheme='blue' size='lg' value={45}  />
                <Heading mb={4} as="h6" size="md" mt={3}>Data Science</Heading>
                <Progress colorScheme='blue' size='lg' value={50} />
                <Heading mb={4} as="h6" size="md" mt={3}>Full Stack Development</Heading>
                <Progress colorScheme='blue' size='lg' value={70} />
                <Heading mb={4} as='h6' size="md" mt="3">Flutter & React Native Development</Heading>
                <Progress colorScheme='blue' size='lg' value={70} />
            </Box>    

            </Flex>
        <HStack spacing={28} >
            {/* <Icon as = {FaFacebookF} boxSize="50" /> */}
            <Icon as = {FaGithub} boxSize="75" onClick={() =>window.open("https://github.com/Sparsh09")}/>
            <Icon as = {FaLinkedin} boxSize="75" onClick={() =>window.open("https://in.linkedin.com/in/sparsh29")} />
        </HStack>
        </VStack>
    )
}

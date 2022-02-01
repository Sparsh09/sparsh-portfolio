import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import {
  DiAndroid,
  DiCodeigniter,
  DiReact,
  DiWebplatform,
} from "react-icons/di";

export default function Projects() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh " }}
      >
        <Box alignSelf="center" px="0" py="16">
          <Heading>Flutter & React Native Apps</Heading>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              bg="blue.400"
              h="30vh"
              w="30vh"
              justify="flex-end"
            >
              <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
              <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                WhatsApp UI Clone
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="gray.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "green.400" }}
            >
              <Icon color="black" p="4" as={DiAndroid} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Instagram UI Clone
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="gray.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "green.400" }}
            >
              <Icon color="black" p="4" as={DiAndroid} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                COVID-19 TRACKER APP
              </Text>
            </Flex>
            <Box w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)' />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

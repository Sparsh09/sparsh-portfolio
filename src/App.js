import { Heading, VStack, Flex, IconButton, useColorMode, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Social from "./components/Social";
function App() {


  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="lg" fontWeight='semibold' color="cyan.400" onClick={() => {window.open("https://drive.google.com/file/d/1Tv4fWjD1XyovsZl_yhdDr7UBGcz8SRIS/view?usp=sharing")}}>
          Resume
        </Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound="true" />
        <IconButton ml={2} icon={<FaGithub />} isRound="true" />
        <IconButton ml={2} icon={<FaInstagram />} isRound="true" />
        <IconButton ml={2} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} />
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
      <Projects></Projects>
    </VStack>
  );
}

export default App;

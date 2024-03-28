import React from "react";
import { Center, Flex, Heading, Text, Button } from "@chakra-ui/react";
import BackgroundSVG from "../../components/SVG/background";

const Home = () => {
  return (
    <Center h="100%" position="relative">
      <BackgroundSVG />
      <Flex
        direction="column"
        alignItems="center"
        gap="2em"
        mx={{ base: "15%", md: "20%", lg: "25%" }}
      >
        <Heading
          fontSize="64px"
          textShadow="2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
        >
          Cloud Learn Hub
        </Heading>
        <Text
          fontSize="20px"
          textAlign="center"
          textShadow="2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
        >
          Whether you're a curious learner, an aspiring developer, or a seasoned
          professional, CloudLearn Hub welcomes you. Let's learn, create, and
          transform the digital landscape together.
        </Text>
        <Button
          as="a"
          fontWeight="300"
          borderRadius="5px"
          bg="black"
          color="white"
          p="2em 5em"
          _hover={{ bg: "black.300" }}
          href="/courses"
        >
          Explore courses
        </Button>
      </Flex>
    </Center>
  );
};

export default Home;

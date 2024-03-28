import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack h="100%" direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt={"About us image"}
          objectFit={"cover"}
          src={"/src/about.jpg"}
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              About us
            </Text>
            <br />{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            At CloudLearn Hub, we are a tight-knit team of passionate tech
            enthusiasts who thrive on collaboration and innovation. Our mission?
            To empower learners worldwide with cutting-edge knowledge in cloud
            computing, computer science, and project management.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Our journey began when a handful of visionaries—each with their own
            unique expertise—decided to break down geographical barriers. From
            the bustling streets of Tokyo to the serene landscapes of Calgary,
            we united under a shared purpose: to make learning accessible,
            engaging, and transformative.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Whether you're a curious learner, an aspiring developer, or a
            seasoned professional, CloudLearn Hub welcomes you. Let's learn,
            create, and transform the digital landscape together. 🚀
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}

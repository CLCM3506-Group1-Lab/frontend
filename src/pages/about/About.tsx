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
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
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
            We are exciting to build a platform that will help you learn and
            grow. We are a team of developers who are passionate about teaching
            and learning.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            We are excited to have you on board. Do you have any questions? Feel
            free to reach out to us. We are here to help you.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            At CloudLearn Hub, we are committed to providing you with the best.
            The best courses, the best instructors, and the best learning
            experience. Every day, we are working hard to make sure that you
            have the best learning experience. Please, let us know how we can
            help you.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}

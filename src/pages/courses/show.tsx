import {
  useShow,
  useGo,
  useCustom,
  useApiUrl,
  useCustomMutation,
} from "@refinedev/core";

import {
  Heading,
  Text,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Image,
  Button,
  Flex,
  Center,
  Skeleton,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
interface CreateSessionResponse {
  url: string;
}
export const PostShow: React.FC = () => {
  const go = useGo();
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;
  const apiUrl = useApiUrl();
  const handleClick = async () => {
    fetch(`http://localhost:4242/create-checkout-session`, {
      // TODO: Use apiUrl instead of hardcoded URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: record?.id,
      }),
    })
      .then((res) => res.json())
      .then((data: CreateSessionResponse) => {
        window.location.href = data.url; // Can't handle normal redirects in here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box py="2em" px="5%" w="100%">
      <Breadcrumb
        fontSize="32px"
        fontWeight="extrabold"
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            onClick={() => {
              go({
                to: {
                  resource: "courses",
                  action: "list",
                },
              });
            }}
          >
            Payment
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {isLoading && (
        <Flex height="100%" direction={{ base: "column", lg: "row" }}>
          <Center flex="1" alignContent="center" minH="50vh" px="1em">
            <Stack gap="1em" width="100%">
              <Skeleton h="5em" />
              <Skeleton h="5em" />
              <Skeleton h="5em" />
            </Stack>
          </Center>
          <Box
            background="#E9E0E0"
            w={{ base: "100%", lg: "2px" }}
            h={{ base: "2px", lg: "auto" }}
          />
          <Center flex="1" minH="50vh">
            <Center flex="1" alignContent="center" minH="50vh" px="1em">
              <Stack gap="1em" width="100%">
                <Skeleton h="5em" />
              </Stack>
            </Center>
          </Center>
        </Flex>
      )}

      {!isLoading && (
        <Flex height="100%" direction={{ base: "column", lg: "row" }}>
          <Center
            flex="1"
            alignContent="center"
            minH="50vh"
            px={{ base: "2em", md: "3.5em", xl: "0" }}
          >
            <Box>
              <Text
                fontSize="36px"
                fontWeight="bold"
                mb="0.5em"
                mt={{ base: "1em", xl: "0" }}
              >{`CA$ ${data?.data.price}.00`}</Text>

              <Flex width="100%" direction={{ base: "column", xl: "row" }}>
                <Flex flex="1" gap="10" justifyContent="center">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                  />
                </Flex>
                <Box
                  flex="1"
                  height="100%"
                  px={{ base: "0", xl: "2em" }}
                  py={{ base: "3em", lg: "1em", xl: "5px" }}
                >
                  <Heading fontSize="32px" mb="0.5em">
                    {data?.data.name}
                  </Heading>
                  <Text fontSize="16px" fontWeight="thin">
                    {data?.data.description}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Center>
          <Box
            background="gray.200"
            w={{ base: "100%", lg: "2px" }}
            h={{ base: "2px", lg: "auto" }}
          />
          <Center flex="1" minH="50vh">
            <Button
              fontWeight="300"
              borderRadius="5px"
              bg="black"
              color="white"
              p="2.5em 5em"
              _hover={{ bg: "black.300" }}
              onClick={handleClick}
            >
              Pay with Stripe
            </Button>
          </Center>
        </Flex>
      )}
    </Box>
  );
};

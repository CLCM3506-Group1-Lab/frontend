import React, { useState } from "react";
import {
  Center,
  Flex,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  InputProps,
  Textarea,
  FormControl,
  SimpleGrid,
} from "@chakra-ui/react";
import BackgroundSVG from "../../components/SVG/background";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useGo } from "@refinedev/core";

const Contact = () => {
  const go = useGo();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <Center h="100%" position="relative">
      <BackgroundSVG />
      <Flex direction="column" w="70%" alignItems="left" gap="2em">
        <Breadcrumb
          fontSize="64px"
          fontWeight="extrabold"
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              textShadow="2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
              onClick={() => {
                go({
                  to: {
                    resource: "courses",
                    action: "list",
                  },
                });
              }}
            >
              Contact us
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <FormControl>
          <SimpleGrid columns={1} spacing={8} placeItems="center">
            <Flex direction="row" gap="2em" width="100%">
              <CustomInput
                value={name}
                onValueChange={(value) => setName(value)}
                flex="5"
                placeholder="Name"
              />
              <CustomInput
                value={email}
                onValueChange={(value) => setEmail(value)}
                flex="4"
                placeholder="E-mail"
              />
            </Flex>
            <CustomInput
              value={phone}
              onValueChange={(value) => setPhone(value)}
              placeholder="Phone number"
            />
            <Textarea
              background="white"
              borderRadius="5px"
              fontSize="20px"
              px="1em"
              py="1.5em"
              minH="10em"
              borderColor="black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button
              w="auto"
              as="a"
              fontWeight="300"
              borderRadius="5px"
              bg="black"
              color="white"
              p="2em 7em"
              _hover={{ bg: "black.300" }}
              href="/courses"
            >
              Submit
            </Button>
          </SimpleGrid>
        </FormControl>
      </Flex>
    </Center>
  );
};

interface CustomInputProps extends InputProps {
  value: string;
  onValueChange: (value: string) => void;
}
const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onValueChange,
  ...rest
}) => {
  return (
    <Input
      background="white"
      borderRadius="5px"
      fontSize="20px"
      px="1em"
      py="1.5em"
      borderColor="black"
      onChange={(e) => onValueChange(e.target.value)}
      value={value}
      {...rest}
    />
  );
};

export default Contact;

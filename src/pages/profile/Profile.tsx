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
  FormLabel,
  Skeleton,
} from "@chakra-ui/react";
import BackgroundSVG from "../../components/SVG/background";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { HttpError, useForm, useGo, useOne } from "@refinedev/core";

interface IProfile {
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  dateOfBirth: Date;
}
const Profile = () => {
  const { data, isLoading, isError } = useOne<IProfile>({
    resource: "profile",
    id: "",
    meta: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refine-auth")}`,
      },
    },
  });

  if (isLoading) {
    return (
      <Center h="100%" position="relative">
        <BackgroundSVG />
        <Flex w="70%" mt="2em" direction="column" gap="2em" alignItems="center">
          <BackgroundSVG />
          <Skeleton height="60px" w="100%" />
          <Skeleton height="60px" w="100%" />
          <Skeleton height="60px" w="100%" />
          <Skeleton height="60px" w="100%" />
          <Skeleton height="60px" w="100%" />
        </Flex>
      </Center>
    );
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  if (data?.data) {
    return <div>{<EditProfile {...data?.data} />}</div>;
  }
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

interface FormValues {
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  dateOfBirth: Date;
}
const EditProfile: React.FC<IProfile> = (props) => {
  const { queryResult, formLoading, onFinish } = useForm<
    IProfile,
    HttpError,
    FormValues
  >({
    resource: "profile",
    action: "edit",
    redirect: "show",
    meta: {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refine-auth")}`,
      },
    },
  });

  const [values, setValues] = React.useState<FormValues>({
    firstName: props?.firstName || "",
    lastName: props?.lastName || "",
    city: props?.city || "",
    country: props?.country || "",
    dateOfBirth: props?.dateOfBirth ? new Date(props.dateOfBirth) : new Date(),
  });

  React.useEffect(() => {
    setValues({
      firstName: props?.firstName || "",
      lastName: props?.lastName || "",
      city: props?.city || "",
      country: props?.country || "",
      dateOfBirth: props?.dateOfBirth
        ? new Date(props.dateOfBirth)
        : new Date(),
    });
  }, [props]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFinish(values);
  };

  return (
    <Center h="100%" position="relative">
      <BackgroundSVG />
      <form onSubmit={(e) => onSubmit(e)}>
        <Flex mt="2em" direction="column" gap="2em" alignItems="center">
          <Flex direction="row" gap="2em" width="100%">
            <FormControl>
              <FormLabel
                fontSize="22px"
                htmlFor="firstName"
                textShadow="1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
              >
                First Name
              </FormLabel>
              <CustomInput
                isDisabled={formLoading}
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onValueChange={(value) =>
                  setValues({ ...values, firstName: value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize="22px"
                htmlFor="lastName"
                textShadow="1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
              >
                Last Name
              </FormLabel>
              <CustomInput
                isDisabled={formLoading}
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onValueChange={(value) =>
                  setValues({ ...values, lastName: value })
                }
              />
            </FormControl>
          </Flex>

          <FormControl>
            <FormLabel
              fontSize="22px"
              htmlFor="city"
              textShadow="1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
            >
              City
            </FormLabel>
            <CustomInput
              isDisabled={formLoading}
              name="city"
              placeholder="City"
              value={values.city}
              onValueChange={(value) => setValues({ ...values, city: value })}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontSize="22px"
              htmlFor="country"
              textShadow="1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
            >
              Country
            </FormLabel>
            <CustomInput
              isDisabled={formLoading}
              name="country"
              placeholder="Country"
              value={values.country}
              onValueChange={(value) =>
                setValues({ ...values, country: value })
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontSize="22px"
              htmlFor="dateOfBirth"
              textShadow="1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
            >
              Date of Birth
            </FormLabel>
            <CustomInput
              isDisabled={formLoading}
              name="dateOfBirth"
              placeholder="Date of Birth"
              type="date"
              value={formatDate(values.dateOfBirth)}
              onValueChange={(value) =>
                setValues({ ...values, dateOfBirth: new Date(value) })
              }
            />
          </FormControl>

          <Button
            w="auto"
            isLoading={formLoading}
            fontWeight="300"
            borderRadius="5px"
            bg="black"
            color="white"
            p="2em 7em"
            type="submit"
            _hover={{ bg: "black.300" }}
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Center>
  );
};

const formatDate = (date: Date = new Date()) => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0 indexed so +1 and pad with 0 if necessary
  const day = ("0" + date.getDate()).slice(-2); // Pad with 0 if necessary
  return `${year}-${month}-${day}`;
};

export default Profile;

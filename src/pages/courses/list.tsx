import React, { useEffect, useState } from "react";
import { useGo, useList } from "@refinedev/core";
import { HStack, Image, Link, useRadioGroup } from "@chakra-ui/react";

import {
  Text,
  RadioGroup,
  Radio,
  Heading,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Stack,
} from "@chakra-ui/react";
import { RadioCard } from "../../components/layout/_components/RadioComponent";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const PostList: React.FC = () => {
  const go = useGo();
  const [filter, setFilter] = useState("all");
  const {
    data: coursesQuery,
    error,
    isLoading,
    isRefetching,
  } = useList({
    resource: "courses",
    pagination: {
      mode: "off",
    },
    filters: [
      {
        field: "category",
        operator: "eq",
        value: filter,
      },
    ],
  });

  const options = [
    "all",
    "Cloud Computing",
    "Computer Science",
    "Project Management",
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "category",
    defaultValue: "all",
    onChange: (e: string) => setFilter(e),
  });

  const group = getRootProps();

  return (
    <Stack direction="column" alignItems="center">
      <Heading
        textAlign="center"
        fontSize="64px"
        fontWeight="extrabold"
        mb="0.5em"
        mt="1.5em"
      >
        Courses List
      </Heading>
      <HStack {...group} mb="1em">
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>

      {(isLoading || isRefetching) && <div>Loading...</div>}

      {!(isLoading || isRefetching) && error && (
        <div>Error: {error.message}</div>
      )}

      {!(isLoading || isRefetching) && coursesQuery?.data && (
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={20}
          mx="10%"
          mb="2em"
        >
          {coursesQuery.data.map((course) => (
            <Card key={course.id} borderRadius="0" border="1px solid #B0B0B0">
              <CardBody p="0">
                <Image
                  src={
                    course.category === "Cloud Computing"
                      ? "/src/cloud-computing.jpg"
                      : course.category === "Computer Science"
                      ? "/src/computer-science.jpg"
                      : course.category === "Project Management"
                      ? "/src/project-management.jpg"
                      : "/src/cloud-computing.jpg"
                  }
                  alt="Green double couch with wooden legs"
                />
                <Stack p="20px" spacing="3">
                  <Heading size="md">{course.name}</Heading>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => {
                    go({
                      to: {
                        resource: "courses",
                        action: "show",
                        id: course.id!,
                      },
                    });
                  }}
                >
                  See more <ChevronRightIcon />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      )}

      {!(isLoading || isRefetching) &&
        coursesQuery?.data &&
        coursesQuery.data.length === 0 && <div>No data found</div>}
    </Stack>
  );
};

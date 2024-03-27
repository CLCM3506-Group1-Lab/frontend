import { Box, useRadio } from "@chakra-ui/react";

export const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        fontSize="20px"
        fontWeight="regular"
        color="black"
        cursor="pointer"
        textUnderlineOffset="5px"
        _checked={{
          textDecoration: "underline",
        }}
        _focus={{
          textDecoration: "underline",
        }}
        px={6}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

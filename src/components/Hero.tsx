import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export const Hero = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <Flex justifyContent="center" alignItems="center" direction="column" px={4}>
      <Box bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
        <Heading fontSize="6vw">{title}</Heading>
      </Box>
      <Text mt={4} color={useColorModeValue("black", "white")}>
        {description}
      </Text>
    </Flex>
  );
};

Hero.defaultProps = {
  title: "with-chakra-ui-typescript",
};

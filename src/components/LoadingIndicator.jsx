/* eslint-disable no-unused-vars */
import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

function LoadingIndicator() {
  return (
    <>
      <Flex
        justifyContent="center"
        align="center"
        backgroundColor="#0003"
        position="absolute"
        w="full"
        h="100vh"
        top={0}
      >
        <Spinner
          size="xl"
          thickness="3px"
          emptyColor="green.500"
          color="gray.200"
        />
      </Flex>
    </>
  );
}

export default LoadingIndicator;

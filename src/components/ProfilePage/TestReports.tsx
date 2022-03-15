import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function TestReports() {
    return (
        <Flex alignItems="center" justifyContent="center"  flexDir="column" h="100%">
            <Text fontFamily="mono" fontSize="4xl">
                Test Report
            </Text>
            <Text fontFamily="mono" fontSize="2xl">
                * YOUR TEST REPORT HERE *
            </Text>
        </Flex>
    );
}

export default TestReports;

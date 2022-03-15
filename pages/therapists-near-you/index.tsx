import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import GoogleMapInstance from "../../src/components/utils/GoogleMapInstance";

function TherapistsNearYou() {
    return (
        <Flex
            h="100%"
            w="100%"
            flexDir="column"
            alignItems={"center"}
            justifyContent="center"
            bgColor="blue.100"
            gap="2rem"
        >
            <Heading fontFamily={"mono"} variant="h1">
                Therapists Near You
            </Heading>
            <GoogleMapInstance />
        </Flex>
    );
}

export default TherapistsNearYou;

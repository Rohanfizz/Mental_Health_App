import { Flex, Grid, GridItem, Heading, Img } from "@chakra-ui/react";

import React from "react";
import GoogleMapInstance from "../../src/components/utils/GoogleMapInstance";

function TherapistsNearYou() {
    return (
        <Grid
            h="100%"
            // templateRows='repeat(2, 1fr)'
            templateColumns="repeat(3, 1fr)"
            gap={4}
        >
            <GridItem colSpan={1} bg="#CCCCFF">
                <Flex
                    h="100%"
                    w="100%"
                    flexDir="column"
                    alignItems={"center"}
                    justifyContent="center"
                    
                    gap="2rem"
                >
                    <Img
                        // bgRepeat={"no-repeat"}
                        // transform={"rotate(45deg)"}
                        src={"helix.svg"}
                        alt="Helix Image"
                        w="70%"
                        h="100%"
                        // position={"absolute"}
                        // transform={"rotate(30deg)"}
                        left="0"
                        // size={"1%"}
                    />
                </Flex>
            </GridItem>
            <GridItem colSpan={2} bg="papayawhip">
                <Flex
                    h="100%"
                    w="100%"
                    flexDir="column"
                    alignItems={"center"}
                    justifyContent="center"
                    bgColor="yellow.100"
                    gap="2rem"
                >
                    <Heading fontFamily={"mono"} variant="h1" fontSize={'5xl'}>
                        Therapists Near You📍
                    </Heading>
                    <GoogleMapInstance />
                </Flex>
            </GridItem>
        </Grid>
    );
}

export default TherapistsNearYou;

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ExamBox from "./ExamBox";

const Tests: React.FC = () => {
    return (
        <Box w="100%" h="100%" bgColor="blue.200" color="gray.700" p="2rem" overflow={"auto"} display="flex" alignItems={"center"}>
            <Box position="sticky" >
                <Text textAlign={"left"} fontSize="7xl" fontFamily={"mono"} >
                    Choose A Suitable Test
                </Text>
            </Box>
            <Flex gap="4rem" p="2rem" flexWrap={"wrap"}>
                <ExamBox title="Depression"/>
                <ExamBox title="OCD"/>
                <ExamBox title="ADHD"/>
                <ExamBox title="PTSD"/>
                <ExamBox title="Phobia"/>
                <ExamBox title="Anxiety"/>
                <ExamBox title="ASD"/>
                <ExamBox title="Panic Disorder"/>
            </Flex>
        </Box>
    );
};

export default Tests;

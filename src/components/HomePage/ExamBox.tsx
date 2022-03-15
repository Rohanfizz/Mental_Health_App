import { Box, Flex, Heading } from "@chakra-ui/react";
import Psychology from "@mui/icons-material/Psychology";
import React from "react";

const ExamBox: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Flex
            rounded="2xl"
            h="20rem"
            w="15rem"
            bgColor="cyan.100"
            boxShadow="md"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
            cursor="pointer"
            _hover={{ bg: "teal.100", boxShadow: "base" }}
            _focus={{ boxShadow: "outline" }}
        >
            <Psychology sx={{ fontSize: "10rem" }} />
            <Heading fontFamily="mono" textAlign={"center"}>
                {title}
            </Heading>
        </Flex>
    );
};

export default ExamBox;

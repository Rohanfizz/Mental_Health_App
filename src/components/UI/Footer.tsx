import { Box, Button, Flex } from "@chakra-ui/react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer: React.FC = ({ children }) => {
    return (
        <>
            <Flex height="2rem" bgColor="gray.700" justifyContent={"flex-end"}>
                    <Flex
                        bgColor={"ligher"}
                        w="2rem"
                        h="100%"
                        alignItems="center"
                        justifyContent={"center"}
                    >
                        <GitHubIcon />
                    </Flex>
            </Flex>
        </>
    );
};
export default Footer;

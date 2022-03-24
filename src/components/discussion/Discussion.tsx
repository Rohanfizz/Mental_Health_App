import { Flex, Heading } from "@chakra-ui/react";

const Discussion = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} width='100%' height='100%' flexDirection={'column'}>
            <Heading>Share Your Thoughts...</Heading>
            <Flex sx={{
                height: '90%',
                width: '80%',
                border: '2px solid',
            }}>
            </Flex>
        </Flex>
    );
}

export default Discussion;
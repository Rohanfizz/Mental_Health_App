import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { motion, MotionConfig } from "framer-motion";

// import Image from "next/image";

const Intro: React.FC = () => {
    return (
        <Box w="100%" h="100%" bgColor="black" color="white">
            <Grid
                height="100%"
                templateColumns={"repeat(4, 1fr)"}
                templateRows={"repeat(1, 1fr)"}
            >
                <GridItem colSpan={2} height="100%">
                    <Flex
                        alignItems={"center"}
                        justifyContent="flex-start"
                        position="relative"
                        top="calc(( 100% - 40rem )/2)"
                        overflow={"hidden"}
                        // right=" calc(( 100% - 100rem) / 2) "
                    >
                        <Image
                            // src="/homeImage.png"
                            // src="/brainGif.webp"
                            src="https://media1.giphy.com/media/l41lJ8ywG1ncm9FXW/giphy.gif?cid=ecf05e47fldzxy7y03vh1ndvojdykpedjtnabqoz99056gq9&rid=giphy.gif&ct=g"
                            objectFit={"contain"}
                            alt="homeImage"
                            height="100%"
                            width="100%"
                        />
                    </Flex>
                </GridItem>
                <GridItem colSpan={2}>
                    <Flex
                        alignItems="center"
                        justifyContent={"center"}
                        paddingRight={"4rem"}
                    >
                        <MotionConfig transition={{ duration: 2 }}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <Text
                                    fontSize={"9xl"}
                                    position="relative"
                                    top="0.5rem"
                                    fontFamily={"body"}
                                    fontStyle="italic"
                                    paddingRight="1rem"
                                    textAlign={"right"}
                                    fontWeight="bold"
                                >
                                    {/* One of the quickest and easiest ways to evaluate
                            whether you are suffering signs of a mental health
                            disorder is to conduct an Online Screening. Mental
                            health conditions such as depression or anxiety ,
                            are real,common and treatable . And recovery is
                            possible */}
                                    One Stop Destination for Your Peace Of Mind
                                </Text>
                            </motion.div>
                        </MotionConfig>
                    </Flex>
                    {/* <Flex fontSize={"7xl"}>The Indian population is gravely suffering when it comes to their mental health</Flex> */}
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Intro;

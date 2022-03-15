import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
        },
    ],
};

function ProgressDoghnut() {
    return (
      <Flex w="100%" h="100%" alignItems="center" justifyContent="flex-start" flexDirection="column" >
            <Text fontSize="4xl" fontFamily="mono">
                Status Report
            </Text>
            <Box maxWidth="12rem" maxHeight="12rem">
                <Doughnut data={data} />
            </Box>
        </Flex>
        // <></>
    );
}

export default ProgressDoghnut;

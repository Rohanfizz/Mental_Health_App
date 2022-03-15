import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const arr = [
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
  [
    { text: "option1", point: 0 },
    { text: "option2", point: 1 },
    { text: "option3", point: 2 },
    { text: "option4", point: 3 },
  ],
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPoint, setCurrentPoint] = useState(0);
  const router = useRouter();

  const onClickHandler = (point: any) => {

    setCurrentPoint((p) => p + point);
    console.log(currentPoint);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < arr.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(currentPoint);
      router.replace("/home");
    }
  };

  return (
    <Box
      height="100%"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems={"center"}
        flexDirection="column"
        sx={{
          width: "70vw",
          height: "70vh",
          bgColor: "rgb(230, 230, 250)",
          boxShadow: "7px 12px rgb(203, 195, 227)",
          borderRadius: "10px",
        }}
      >
        {arr[currentQuestion].map((option, idx) => (
          <Box
            fontFamily={'mono'}
            fontSize={'200%'}
            color='purple'
            onClick={() => onClickHandler(option.point)}
            key={idx}
            sx={{
              height: "20%",
              width: "80%",
              bgColor: "white",
              borderRadius: "10px",
              boxShadow: "5px 10px #888888",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              _hover: { bgColor: "#D8BFD8" },
            }}
          >
            {option.text}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Test;

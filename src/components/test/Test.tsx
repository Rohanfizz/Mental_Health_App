import { Box, Flex } from "@chakra-ui/react";
import Question from "./Question";
import { useState } from "react";

const arr = [
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
  ["option1", "option2", "option3", "option4"],
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);


  const onClickHandler = () => {
    setCurrentQuestion(currentQuestion+1);
    console.log(currentQuestion);
  }

  return (
    <Box
      height="100%"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display="flex"
        justifyContent='space-around'
        alignItems={"center"}
        flexDirection='column'
        sx={{
          width: "70vw",
          height: "70vh",
          bgColor: "rgb(230, 230, 250)",
          boxShadow: "7px 12px rgb(203, 195, 227)",
          borderRadius: "10px",
          
        }}
      >
        {arr[currentQuestion].map((option , idx) => (
          <Box
            onClick={onClickHandler}
            key={idx}
            sx={{
              height: "20%",
              width: "80%",
              bgColor: 'white',
              borderRadius: "10px",
              boxShadow: "5px 10px #888888",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              _hover: {bgColor: '#D8BFD8'}
            }}
          >{option}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default Test;

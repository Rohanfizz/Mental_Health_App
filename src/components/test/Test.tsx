import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const arr = [
    [
      {text:"I do not feel sad.",point:0},
      {text:"I feel sad. ",point:1},
      {text:"I am sad all the time and I can't snap out of it. ",point:2},
      {text:"I am so sad and unhappy that I can't stand it.",point:3},
   ],
   [
      {text:"I am not particularly discouraged about the future",point:0},
      {text:"I feel discouraged about the future.",point:1},
      {text:"I feel I have nothing to look forward to.",point:2},
      {text:"I feel the future is hopeless and that things cannot improve.",point:3},
   ],
   [
      {text:"I do not feel like a failure.",point:0},
      {text:"I feel I have failed more than the average person. ",point:1},
      {text:"As I look back on my life, all I can see is a lot of failures. ",point:2},
      {text:"I feel I am a complete failure as a person. ",point:3},
   ],
   [
      {text:"I get as much satisfaction out of things as I used to. ",point:0},
      {text:"I don't enjoy things the way I used to.",point:1},
      {text:"I don't get real satisfaction out of anything anymore.",point:2},
      {text:"I am dissatisfied or bored with everything. ",point:3},
   ],
   [
      {text:"I don't feel particularly guilty",point:0},
      {text:"I feel guilty a good part of the time. ",point:1},
      {text:"I feel quite guilty most of the time. ",point:2},
      {text:"I feel guilty all of the time. ",point:3},
   ],
   [
      {text:"I don't feel I am being punished. ",point:0},
      {text:"I feel I may be punished. ",point:1},
      {text:"I expect to be punished. ",point:2},
      {text:"I feel I am being punished. ",point:3},
   ],
   [
      {text:"I don't feel disappointed in myself. ",point:0},
      {text:"I am disappointed in myself. ",point:1},
      {text:"I am disgusted with myself. ",point:2},
      {text:"I hate myself.",point:3},
   ],
   [
      {text:"I don't feel I am any worse than anybody else. ",point:0},
      {text:"I am critical of myself for my weaknesses or mistakes.",point:1},
      {text:"I blame myself all the time for my faults. ",point:2},
      {text:"I blame myself for everything bad that happens. ",point:3},
   ],
   [
      {text:"I don't have any thoughts of killing myself.",point:0},
      {text:"I have thoughts of killing myself, but I would not carry them out. ",point:1},
      {text:"I would like to kill myself.",point:2},
      {text:"I would kill myself if I had the chance.",point:3},
   ],
   [
      {text:"I don't cry any more than usual.",point:0},
      {text:"I cry more now than I used to. ",point:1},
      {text:"I cry all the time now.",point:2},
      {text:"I used to be able to cry, but now I can't cry even though I want to ",point:3},
   ],
   [
      {text:"I am no more irritated by things than I ever was.",point:0},
      {text:"I am slightly more irritated now than usual. ",point:1},
      {text:"I am quite annoyed or irritated a good deal of the time. ",point:2},
      {text:"I feel irritated all the time. ",point:3},
   ],
   [
      {text:"I have not lost interest in other people. ",point:0},
      {text:"I am less interested in other people than I used to be. ",point:1},
      {text:"I have lost most of my interest in other people.",point:2},
      {text:"I have lost all of my interest in other people.",point:3},
   ],
   [
      {text:"I make decisions about as well as I ever could. ",point:0},
      {text:"I put off making decisions more than I used to. ",point:1},
      {text:"I have greater difficulty in making decisions more than I used to. ",point:2},
      {text:"I can't make decisions at all anymore. ",point:3},
   ],
   [
      {text:"I don't feel that I look any worse than I used to.",point:0},
      {text:"I am worried that I am looking old or unattractive. ",point:1},
      {text:"I feel there are permanent changes in my appearance that make me look unattractive.",point:2},
      {text:"I believe that I look ugly.",point:3},
   ],
   [
      {text:"I can work about as well as before. ",point:0},
      {text:"It takes an extra effort to get started at doing something.",point:1},
      {text:"I have to push myself very hard to do anything.",point:2},
      {text:"I can't do any work at all. ",point:3},
   ],
   [
      {text:"I can sleep as well as usual. ",point:0},
      {text:"I don't sleep as well as I used to.",point:1},
      {text:"I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.",point:2},
      {text:"I wake up several hours earlier than I used to and cannot get back to sleep.",point:3},
   ],
   [
      {text:"I don't get more tired than usual. ",point:0},
      {text:"I get tired more easily than I used to.",point:1},
      {text:"I get tired from doing almost anything.",point:2},
      {text:"I am too tired to do anything. ",point:3},
   ],
   [
      {text:"My appetite is no worse than usual.",point:0},
      {text:"My appetite is not as good as it used to be.",point:1},
      {text:"My appetite is much worse now. ",point:2},
      {text:"I have no appetite at all anymore. ",point:3},
   ],
   [
      {text:"I haven't lost much weight, if any, lately.",point:0},
      {text:"I have lost more than five pounds.",point:1},
      {text:"I have lost more than ten pounds. ",point:2},
      {text:"I have lost more than fifteen pounds",point:3},
   ],
   [
      {text:"I am no more worried about my health than usual.",point:0},
      {text:"I am worried about physical problems like aches, pains, upset stomach, or constipation. ",point:1},
      {text:"I am very worried about physical problems and it's hard to think of much else",point:2},
      {text:"I am so worried about my physical problems that I cannot think of anything else.",point:3},
   ],
   [
      {text:"I have not noticed any recent change in my interest in sex.",point:0},
      {text:"I am less interested in sex than I used to be.",point:1},
      {text:"I have almost no interest in sex. ",point:2},
      {text:"I have lost interest in sex completely.",point:3},
   ],
  [
    {text: "Test completed.Click here to know your score" , point: 0}
  ]
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
      width='100%'
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection='column'
      bgImage='/kids.svg'
      bgSize={'auto'}
      bgPosition={'bottom'}
      bgRepeat={'no-repeat'}
    >
      <Heading fontFamily={'mono'} fontSize='400%' fontWeight='extrabold' color={'purple.600'}>COMPLETE YOUR ASSESSMENT</Heading>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems={"center"}
        flexDirection="column"
        sx={{
          width: "60vw",
          height: "80vh",
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
              height: "22%",
              width: "95%",
              bgColor: "white",
              borderRadius: "15px",
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

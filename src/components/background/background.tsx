import { Box, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { ReactNode } from "react";

const moveUp = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-120vh) rotate(600deg);
  }
`;

type BackgroundProps = {
  children: ReactNode;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const bubbleStyles = [
    { left: "10%", animationDelay: "0s", width: "40px", height: "40px" },
    {
      left: "20%",
      animationDelay: "2s",
      width: "80px",
      height: "80px",
      animationDuration: "17s",
    },
    { left: "25%", animationDelay: "4s", width: "40px", height: "40px" },
    {
      left: "40%",
      animationDelay: "0s",
      width: "60px",
      height: "60px",
      animationDuration: "22s",
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
    { left: "70%", animationDelay: "0s", width: "40px", height: "40px" },
    {
      left: "80%",
      animationDelay: "3s",
      width: "120px",
      height: "120px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    { left: "32%", animationDelay: "7s", width: "160px", height: "160px" },
    {
      left: "55%",
      animationDelay: "15s",
      width: "20px",
      height: "20px",
      animationDuration: "40s",
    },
    {
      left: "25%",
      animationDelay: "2s",
      width: "10px",
      height: "10px",
      animationDuration: "40s",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    { left: "90%", animationDelay: "11s", width: "160px", height: "160px" },
  ];

  return (
    <VStack
      direction="column"
      display="flex"
      background="linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%)"
      position="relative"
      height="100vh"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow="column"
        height="96.4vh"
        width="100%"
        position="relative"
        zIndex={2}
      >
        <Box
          as="ul"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={1}
          margin={0}
          padding={0}
          overflow="hidden"
          style={{ listStyle: "none" }}
        >
          {bubbleStyles.map((style, index) => (
            <Box
              as="li"
              key={index}
              position="absolute"
              bottom="-200px"
              backgroundColor="rgba(255, 255, 255, 0.15)"
              clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
              animation={`${moveUp} ${
                style.animationDuration || "25s"
              } infinite linear`}
              {...style}
            ></Box>
          ))}
        </Box>
        <Box
          zIndex={2}
          position="relative"
          textAlign="center"
          color="white"
          fontSize="1.5rem"
        >
          {children}
        </Box>
      </Box>
      <Text color="white">© 2024 Project CYE</Text>
    </VStack>
  );
};

export default Background;

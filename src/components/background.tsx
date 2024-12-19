import { Box, Text, VStack } from "@chakra-ui/react";

const Background = () => {
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
        <ul className="bg-bubbles">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </Box>
      <Text color="white">© 2024 Project CYE</Text>

      <style jsx>{`
        .bg-bubbles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .bg-bubbles li {
          position: absolute;
          list-style: none;
          display: block;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.15);
          bottom: -160px;
          animation: square 25s infinite linear;
        }

        .bg-bubbles li:nth-child(1) {
          left: 10%;
        }
        .bg-bubbles li:nth-child(2) {
          left: 20%;
          width: 80px;
          height: 80px;
          animation-delay: 2s;
          animation-duration: 17s;
        }
        .bg-bubbles li:nth-child(3) {
          left: 25%;
          animation-delay: 4s;
        }
        .bg-bubbles li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-duration: 22s;
          background-color: rgba(255, 255, 255, 0.25);
        }
        .bg-bubbles li:nth-child(5) {
          left: 70%;
        }
        .bg-bubbles li:nth-child(6) {
          left: 80%;
          width: 120px;
          height: 120px;
          animation-delay: 3s;
          background-color: rgba(255, 255, 255, 0.2);
        }
        .bg-bubbles li:nth-child(7) {
          left: 32%;
          width: 160px;
          height: 160px;
          animation-delay: 7s;
        }
        .bg-bubbles li:nth-child(8) {
          left: 55%;
          width: 20px;
          height: 20px;
          animation-delay: 15s;
          animation-duration: 40s;
        }
        .bg-bubbles li:nth-child(9) {
          left: 25%;
          width: 10px;
          height: 10px;
          animation-delay: 2s;
          animation-duration: 40s;
          background-color: rgba(255, 255, 255, 0.3);
        }
        .bg-bubbles li:nth-child(10) {
          left: 90%;
          width: 160px;
          height: 160px;
          animation-delay: 11s;
        }

        @keyframes square {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-700px) rotate(600deg);
          }
        }
      `}</style>
    </VStack>
  );
};

export default Background;

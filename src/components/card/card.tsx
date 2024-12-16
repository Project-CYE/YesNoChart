import { Box, Card, HStack, VStack, Flex } from "@chakra-ui/react";
import CardButton from "./card-button";

type ButtonProps = {
  url: string;
  label: string;
};

type Tprops = {
  title: string;
  subTitle: string;
  buttons: ButtonProps[];
};

const HomeCard: React.FC<Tprops> = ({ title, subTitle, buttons }) => {
  return (
    <HStack display="flex" justifyContent="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="50%"
      >
        <Card.Root
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexFlow="column"
          p="30px"
          border="2px solid black"
          borderRadius="10px"
        >
          <Card.Title textStyle="4xl">{title}</Card.Title>
          <Card.Description
            textStyle="2xl"
            textAlign="center"
            whiteSpace="pre-wrap"
          >
            {subTitle}
          </Card.Description>
          <Flex
            direction={buttons.length <= 2 ? "row" : "column"}
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
            gap="10px"
          >
            {buttons.map((button, index) => (
              <CardButton key={index} url={button.url} label={button.label} />
            ))}
          </Flex>
        </Card.Root>
      </Box>
    </HStack>
  );
};

export default HomeCard;

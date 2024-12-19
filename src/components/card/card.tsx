import { Box, Button, Flex, Text, Link, VStack } from "@chakra-ui/react";

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
    <VStack
      direction="column"
      display="flex"
      background="linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%)"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow="column"
        height="96.4vh"
        width="100%"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexFlow="column"
          gapY="25px"
        >
          <Text textStyle="4xl" color="white">
            {title}
          </Text>
          <Text
            textStyle="2xl"
            textAlign="center"
            whiteSpace="pre-wrap"
            color="white"
          >
            {subTitle}
          </Text>
          <Flex
            direction={buttons.length <= 2 ? "row" : "column"}
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
            gap="20px"
          >
            {buttons.map((button, index) => (
              <Link href={button.url} key={index}>
                <Button
                  size="xl"
                  width="300px"
                  colorPalette="green"
                  color="white"
                  variant="outline"
                  _hover={{
                    color: "green",
                  }}
                >
                  {button.label}
                </Button>
              </Link>
            ))}
          </Flex>
        </Box>
      </Box>
      <Text color="white">© 2024 Project CYE</Text>
    </VStack>
  );
};

export default HomeCard;

import { Box, Button, Flex, Text, Link } from "@chakra-ui/react";

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
  );
};

export default HomeCard;

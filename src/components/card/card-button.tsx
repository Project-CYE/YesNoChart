import { Box, Text } from "@chakra-ui/react";

type TProps = {
  url: string;
  label: string;
};

const CardButton: React.FC<TProps> = ({ url, label }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="200px"
      p="10px"
      border="1.5px solid gray"
      borderBottom="5px solid green"
      cursor="pointer"
      _hover={{ backgroundColor: "#CCFFCC" }}
      onClick={handleClick}
    >
      <Text>{label}</Text>
    </Box>
  );
};

export default CardButton;

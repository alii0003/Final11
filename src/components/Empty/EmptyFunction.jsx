import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = () => {
  const navigate = useNavigate();
  const handleproducts = () => {
    navigate("/allproducts");
  };
  return (
    <div>
      <Container
        w="75%"
        m="auto"
        align={"left"}
        h="80vh"
        display="flex"
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Heading mx={"4"} my={"6"} textTransform={"uppercase"}>
            Səbət Boşdur
          </Heading>
          <Text mx={"4"} my={"6"}>
          Çantanıza bir şey əlavə etdikdən sonra o, burada görünəcək.
          </Text>

          <Button
            onClick={handleproducts}
            mx={"4"}
            my={"5"}
            p="1rem 4rem"
            bg={"black"}
            color={"whitesmoke"}
            colorScheme={"orange"}
          >
            BAŞLADIQ
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Empty;

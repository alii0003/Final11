import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const CheckOutPage = ({
  cart,
  show_price,
  discount_price,
  link,
  title,
  coupon,
  total_discount,
  discount,
  quantity,
}) => {
  const navigate = useNavigate();
  return (
    <Box w="100%" m="auto">
      <Stack>
        <Button
          border={"3px solid beige"}
          bg={"black"}
          color={"white"}
          fontWeight={"bold"}
          colorScheme={"none"}
          p="1.5rem"
          _hover={{ bg: "none", color: "teal" }}
          onClick={() => navigate(link)}
        >
          {title}
        </Button>
      </Stack>

      <Stack spacing={5} my={"7"} border="3px solid beige">
        <Heading size={"md"} align={"left"} mx={"2"}>
        SİFARİŞ
        </Heading>
        <Flex lineHeight={"10"}>
          <Box align={"left"} mx={"2"} my={"4"}>
            <Text>Əsas Qiymət</Text>
            <Text>{cart.length} Məhsul</Text>
            <Text>Miqdar</Text>
            <Text>Endirim</Text>
            <Text>Çatdırılma</Text>
            <Text>Ümumi</Text>
            <Badge colorScheme="red">( Bütün vergilər daxil olmaqla )</Badge>
          </Box>
          <Box mx={"2"} my={"4"}>
            <Text as="s" color="grey">
              ₺{show_price}.00
            </Text>
            <Text>₺{discount_price}.00</Text>
            <Text>{quantity}</Text>
            <Text>₺{discount}.00</Text>
            <Text>Pulsuz</Text>
            <Text>₺{total_discount}.00</Text>
          </Box>
        </Flex>
      </Stack>
      <Stack my={"2"}>{coupon}</Stack>
    </Box>
  );
};

export default CheckOutPage;

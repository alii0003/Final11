import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SideMenu({ colorMode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button colorScheme="blackAlpha" bg="none" color="black" onClick={onOpen}>
        <GiHamburgerMenu color={colorMode === "dark" ? "white" : "black"} />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Sports K</DrawerHeader>
          <DrawerBody>
            <Stack>
              <Link to="/">
                <Text my="4" mx="2">
                  Əsas
                </Text>
              </Link>
              <Link to="/allproducts">
                <Text my="4" mx="2">
                  Bütün Məhsul
                </Text>
              </Link>
              <Link to="/men">
                <Text my="4" mx="2">
                  Kişi
                </Text>
              </Link>
              <Link to="/women">
                <Text my="4" mx="2">
                  Qadın
                </Text>
              </Link>
              <Link to="/shoes">
                <Text my="4" mx="2">
                  Ayaqqabı
                </Text>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

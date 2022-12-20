import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  // Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import portfolio from "../../img/portfolio.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { GiCondorEmblem } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 468px)");

  return (
    <div className="Footer">
      <Box
        bg="black"
        color="whitesmoke"
        height={isSmallerThan ? "50vh" : "50vh"}
        pt="3rem"
        lineHeight="2rem"
      >
        <Flex
          justify={"space-evenly"}
          width={["100%", "100%", "100%", "100%"]}
          textAlign={isSmallerThan ? "left" : "center"}
          fontSize={["sm", "md", "md", "md"]}
          flexDirection={isSmallerThan ? "row" : "column"}
        >
          <Box as={Flex} flexDirection="column">
            <Heading>Məhsul</Heading>
            <Text as={Link} to="/allproducts?gender=MEN">KİŞİ KOLLEKSİYASI</Text>
            <Text as={Link} to="/allproducts?gender=WOMEN">QADIN KOLLEKSİYASI</Text>
            <Text as={Link} to="/allproducts?category=shoes" >İDMAN KOLLEKSİYASI</Text>
            <Text as={Link} to="/allproducts?category=clothes">ÜMÜMİ GEYİM KOLLEKSİYASI</Text>
          </Box>

          {isSmallerThan ? (
            <Box>
              <Heading>Dəstək</Heading>
              <Text>Kömək</Text>
              <Text>Müştəri xidməti</Text>
              <Text>Göndərmə</Text>
              <Text>Sifariş İzləyicisi</Text>
              <Text>Qaytarma və Mübadilə</Text>
            </Box>
          ) : null}

          {isLargerThan ? (
            <Box>
              <Heading>Şirkət Məlumatı</Heading>
              <Text>Bizim haqqımızda</Text>
              <Text>Müəssisə Təfərrüatları</Text>
              <Text>Karyera</Text>
              <Text>Şirkət Proqramları</Text>
            </Box>
          ) : null}
          <Box mt="1rem" display={"flex"} gap="1rem" justifyContent={"center"}>
            <a
              href="https://www.linkedin.com/in/ali-babazade-3a341b200/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsLinkedin} />
            </a>
            <a
              href="https://github.com/alii0003"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsGithub} />
            </a>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;

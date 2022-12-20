import { Box, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const MyAccount = () => {
  const profileData = useSelector((state) => state.AuthReducer?.profileData);
  console.log(profileData)
  return (
    <div>
      <Box
        m="2rem"
        className="myaccount"
        h={"100vh"}
        bgImage={"linear-gradient(skyblue,royalblue)"}
      >
        <Heading w={"80%"} m={"auto"} className="heading">
          Salam {profileData.length !== 0 ? profileData.name : "User"}! Təşəkkür edirəm
          səhifəmizi izlədiyiniz üçün!
        </Heading>
        <Flex
          alignItems={"center"}
          alignContent={"center"}
          h={"50vh"}
          w={"50%"}
          m={"auto"}
          my={"5"}
        >
          <Heading className="heading"> İzləyin : </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Tooltip label="Follow Me On Github" color="white">
              <Box>
                <Text>
                  <a href="https://github.com/alii0003" alt={"alii0003"}>
                    <AiFillGithub fontSize={"45px"} />
                  </a>
                </Text>
              </Box>
            </Tooltip>
            <Tooltip label="Follow Me On Linkedin" color="white">
              <Box>
                <Text>
                  <a
                    href="https://www.linkedin.com/in/ali-babazade-3a341b200/"
                    alt={"Ali Babazade"}
                  >
                    <AiFillLinkedin fontSize={"50px"} />
                  </a>
                </Text>
              </Box>
            </Tooltip>
          </Flex>
        </Flex>
        <Text fontSize={"30px"} color="white">
          Gözəl Günə Başla
        </Text>
      </Box>
    </div>
  );
};

export default MyAccount;

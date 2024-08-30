import {
  Box,
  Button,
  Center,
  Circle,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Spacer,
  Switch,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
// import round from "../images/ball1.png";
import { CiShoppingCart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { GoLink } from "react-icons/go";
import { BsSuitcaseLg } from "react-icons/bs";
import Content2 from "./Content2";
import wavechart from "../images/wavechart.png";
import Content3 from "./Content3";
import Content4 from "./Content4";
import { HiLanguage } from "react-icons/hi2";
import { CiBrightnessDown } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useCustomTheme } from "../theme";
import { LuMoon } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import LineChart from "./LineChart";
import LineChart2 from "./LineChart";
import ScrollingBoxes from "./ScrollingBoxes";
import HeroSlider from "./AnimatedDiv";

// *********************************effect table data
const BoxData = [
  {
    title: "Website Analytics",
    para: "Total 28.5% Conversion Rate",
    heading: "Revenue Sources",
    numer: "268",
    label: "Direct",
    numer1: " 62",
    label1: "Referral",
    numer2: "890",
    label2: "Organic",
    numer3: "1.2k",
    label3: "Campaign",
  },
  {
    title: "Website Analytics",
    para: "Total 28.5% Conversion Rate",
    heading: "Revenue Sources",
    numer: "268",
    label: "Direct",
    numer1: " 62",
    label1: "Referral",
    numer2: "890",
    label2: "Organic",
    numer3: "1.2k",
    label3: "Campaign",
  },
  {
    title: "Website Analytics",
    para: "Total 28.5% Conversion Rate",
    heading: "Revenue Sources",
    numer: "268",
    label: "Direct",
    numer1: " 62",
    label1: "Referral",
    numer2: "890",
    label2: "Organic",
    numer3: "1.2k",
    label3: "Campaign",
  },
];

// const table1data=[
//   {
//     box:
//   }
// ]
function Content() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDarkMode = colorMode === "dark";
  // const [theme, setTheme] = useState("dark");
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    secondaryColor,
    gridColor,
    pColour,
    smallColor,
    pColor,
    titleColor,
    backgroundColor,
    whitetheme,
  } = useCustomTheme();

  // const handleThemeChange = (selectedTheme) => {
  //   if (selectedTheme === "light" && theme !== "light") {
  //     setTheme("light");
  //     toggleColorMode("light");
  //   } else if (selectedTheme === "dark" && theme !== "dark") {
  //     setTheme("dark");
  //     toggleColorMode("dark");
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === BoxData.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000); // Change the interval duration as needed (in milliseconds)

  //   return () => clearInterval(interval);
  // }, []);
  // const theme = useTheme();
  return (
    <>
      {/* <Box bg={backgroundColor} mt={"4"}> */}
      <Box mt={"4"}>
        {/* //search  bar */}

        {/* <Box
          boxShadow={"md"}
          // bg={"white"}
          bg={gridColor}
          py={"0.5"}
          px={"6"}
          rounded={"lg"}
        >
          <HStack alignItems={"center"} gap={"4"}>
            <CiSearch size={"28px"} />
            <Input variant="unstyled" p={"3"} placeholder="Search (Ctrl+/)" />

            <HiLanguage size={"26px"} color="#6f6b7d" />

            <Menu placement="bottom-end">
              <MenuButton>
                {" "}
                <CiBrightnessDown size={"20px"} />
              </MenuButton>
              <MenuList minWidth={"130px"} fontSize={"xs"} px={"2"}>
                <MenuItem onClick={() => handleThemeChange("dark")}>
                  <Flex alignItems={"center"} gap={"2"}>
                    <CiBrightnessDown size={"14"} />
                    <Text>Light</Text>
                  </Flex>
                </MenuItem>{" "}
                <MenuItem onClick={() => handleThemeChange("light")}>
                  {" "}
                  <Flex alignItems={"center"} gap={"2"}>
                    <LuMoon size={"14"} />
                    <Text>Dark</Text>
                  </Flex>
                </MenuItem>{" "}
                <MenuItem onClick={toggleColorMode}>
                  <Flex alignItems={"center"} gap={"2"}>
                    <RiComputerLine size={"14"} />
                    <Text>System</Text>
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>

            <AiOutlineAppstoreAdd size={"26px"} color="#6f6b7d" />
            <IoNotificationsOutline size={"26px"} color="#6f6b7d" />
            <Image
              borderRadius="full"
              boxSize="30px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </HStack>
        </Box> */}
        {/* """""""""""""""""""''''component" */}
        {/* <ScrollingBoxes /> */}

        <Grid
          templateRows={{ base: "repeat(1, 1fr)", lg: "repeat(1, 1fr)" }}
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={4}
          mt={""}
          // m={"4"}
        >
          {/* ******************effecat box */}
          <GridItem
            // textColor={"white"}
            // rounded={"md"}
            colSpan={2}
            // bg="#7367f0"
            // p={"6"}
            // // boxShadow={"lg"}
            // boxShadow={"md"}
            // position={"relative"}
          >
            <HeroSlider />
            {/* <Box>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Box>
                  <Text fontSize={"xl"}>Website Analytics</Text>
                  <Text fontSize={"xs"} mt={"1"}>
                    Total 28.5% of Conversion{" "}
                  </Text>
                  <Text fontSize={"sm"} mt={"4"} fontWeight={"normal"}>
                    Revenue Sourcces{" "}
                  </Text>
                  <Flex gap={"8"}>
                    <Flex mt={"3"} gap={"6"} flexDirection={"column"}>
                      <Flex gap={"2"} alignItems={"center"}>
                        <Box
                          bg={"purple.600"}
                          py={"0.5"}
                          px={"3"}
                          rounded={"md"}
                        >
                          268{" "}
                        </Box>
                        <Text fontSize={"sm"}>Spenddsfsdf</Text>
                      </Flex>
                      <Flex gap={"2"} alignItems={"center"}>
                        <Box
                          bg={"purple.600"}
                          py={"0.5"}
                          px={"3"}
                          rounded={"md"}
                        >
                          268{" "}
                        </Box>
                        <Text fontSize={"sm"}>Spend</Text>
                      </Flex>
                    </Flex>{" "}
                    <Flex mt={"3"} gap={"6"} flexDirection={"column"}>
                      <Flex gap={"2"} alignItems={"center"}>
                        <Box
                          bg={"purple.600"}
                          py={"0.5"}
                          px={"3"}
                          rounded={"md"}
                        >
                          268{" "}
                        </Box>
                        <Text fontSize={"sm"}>Spenddfsdgdfg</Text>
                      </Flex>
                      <Flex gap={"2"} alignItems={"center"}>
                        <Box
                          bg={"purple.600"}
                          py={"0.5"}
                          px={"3"}
                          rounded={"md"}
                        >
                          268{" "}
                        </Box>
                        <Text fontSize={"sm"}>Spendsdfdg</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Spacer />
                <Image
                  mr={"6"}
                  src={round}
                  alt="s"
                  w={{ base: 100, md: 150, lg: 130, xl: 150 }}
                  h={150}
                  borderRadius="full"
                />
              </Flex>
            </Box> */}
          </GridItem>
          {/* *****************@ 2 groundobxes */}
          <GridItem
            rounded={"md"}
            bg={whitetheme}
            rowSpan={1}
            colSpan={1}
            p={"6"}
            boxShadow={"md"}
          >
            {/* <GridItem rounded={"md"} rowSpan={1} colSpan={1} bg="white" p={"6"}> */}
            <Box position={"relative"}>
              <Flex>
                <Text textColor={smallColor} fontSize={"xs"}>
                  Sales Overview
                </Text>
                <Spacer />
                <Text textColor={"green.400"} fontSize={"sm"}>
                  +18.2%
                </Text>
              </Flex>
              <Text
                textColor={titleColor}
                fontWeight={"normal"}
                fontSize={"2xl"}
              >
                $42.5k
              </Text>
              <Flex mt={"3"}>
                <Box>
                  <Box>
                    <Flex gap={"2"}>
                      <Box p={"1"} bg={"#d9f8fc"} rounded={"md"}>
                        <BsCart color="#00cfe8" />
                      </Box>
                      <Text textColor={pColor} fontSize={"sm"}>
                        Order
                      </Text>
                    </Flex>{" "}
                  </Box>
                  <Box mt={"4"}>
                    <Text
                      textColor={titleColor}
                      fontWeight={"semibold"}
                      fontSize={"md"}
                    >
                      62.2%
                    </Text>
                    <Text textColor={pColor} mt={"1"} fontSize={"xs"}>
                      6,440
                    </Text>
                  </Box>
                </Box>
                <Center height="90px" position={"absolute"} right={"50%"}>
                  <Box
                    bg={"#a5a3ae"}
                    rounded={"full"}
                    px={"1"}
                    fontSize={"xs"}
                    position={"absolute"}
                    zIndex={"1111"}
                    opacity={"0.4"}
                  >
                    <Text textColor={"black"} opacity={"0.5"}>
                      {" "}
                      vs
                    </Text>
                  </Box>{" "}
                  <Divider orientation="vertical" color={"#6f6b7d"} />
                </Center>

                <Spacer />
                <Box>
                  <Box>
                    <Flex gap={"2"}>
                      <Text textColor={pColor} fontSize={"sm"}>
                        Visits
                      </Text>
                      <Box p={"1"} bg={"#eae8fd"} rounded={"md"}>
                        <GoLink
                          color="#7367f0
"
                        />
                      </Box>
                    </Flex>{" "}
                  </Box>
                  <Box mt={"4"} textAlign={"right"}>
                    <Text
                      textColor={titleColor}
                      fontWeight={"semibold"}
                      fontSize={"md"}
                    >
                      25.5%
                    </Text>
                    <Text textColor={pColor} mt={"1"} fontSize={"xs"}>
                      12,749
                    </Text>
                  </Box>
                </Box>
              </Flex>
              <Progress
                mt={"4"}
                value={65}
                height={"2"}
                rounded={"lg"}
                colorScheme={"cyan"}
                bg={"#7367f0"}
              />
            </Box>
          </GridItem>

          {/* ########################second box */}

          <GridItem boxShadow={"md"} rounded={"md"} colSpan={1} bg={whitetheme}>
            {/* <Box> */}
            <Box pt={"6"} px={"6"}>
              <Box
                w={"fit-content"}
                pt={"2.5"}
                px={"2.5"}
                bg={"#dff7e9"}
                rounded={"full"}
              >
                <BsSuitcaseLg color="#28c76f" />
              </Box>
              <Text
                mt={"2"}
                textColor={titleColor}
                fontWeight={"semibold"}
                fontSize={"md"}
              >
                97.5k
              </Text>
              <Text textColor={pColor} fontSize={"xs"}>
                Revenue Generated
              </Text>{" "}
            </Box>
            {/* <ScrollingBoxes /> */}
            <LineChart2 />
            {/* <Image src={wavechart} alt="s" w={"fit-content"} h={100} /> */}
          </GridItem>
        </Grid>
        {/* #################################################################grid 2 */}
        {/* <Content2 />
        <Content3 />
        <Content4 /> */}
      </Box>
    </>
  );
}

export default Content;

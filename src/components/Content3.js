import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import usa from "../images/usa.png";
import brazil from "../images/brazil.jpeg";
import india from "../images/india.png";
import aus from "../images/aus.png";
import chin from "../images/chin.png";
// import usa from "../images/usa.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
import linechart from "../images/chart2.png";
import { AiOutlineMail } from "react-icons/ai";
import { GoLink } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { RiPaypalLine } from "react-icons/ri";
import { useCustomTheme } from "../theme";
import CombinationChart from "./CombinationChart";

const table1Data = [
  {
    src: usa,
    sales: "$8,567k",
    country: "United states",
    icon: <FaAngleUp />,
    value: "25.8%",
  },
  {
    src: brazil,
    sales: "$2,415k",
    country: "Brazil",
    icon: <FaAngleDown />,
    value: "6.2%",
  },
  {
    src: india,
    sales: "$$865k",
    country: "India",
    icon: <FaAngleUp />,
    value: "12.4%",
  },
  {
    src: aus,
    sales: "$745k",
    country: "Australia",
    icon: <FaAngleDown />,
    value: "11.9%",
  },

  {
    src: usa,
    sales: "$45",
    country: "France",
    icon: <FaAngleUp />,
    value: "16.2%",
  },
  {
    src: chin,
    sales: "$12k",
    country: "China",
    icon: <FaAngleUp />,
    value: "14.8%",
  },
];

const table2Data = [
  {
    icon: <AiOutlineMail color="#28c76f" size={"18"} />,
    label: "Emails",
    value: "12,346",
    ratio: "0.3%",
    bg: "#dff7e9",
  },
  {
    icon: <GoLink color="cyan" size={"18"} />,
    label: "Opened",
    value: "8,734",
    ratio: "2.1%",
    bg: "#d9f8fc",
  },
  {
    icon: <TbCurrencyDollar color="#ff9f43" size={"18"} />,
    label: "Clicked",
    value: "967",
    ratio: "1.4%",
    bg: "#fff1e3",
  },
  {
    icon: <CiClock2 color="#7367f0" size={"18"} />,
    label: "Subscribe",
    value: "345",
    ratio: "8.5k",
    bg: "#eae8fd",
  },
  {
    icon: <RiPaypalLine color="#6f6b7d" size={"18"} />,
    label: "Complaints",
    value: "10",
    ratio: "1.5%",
    bg: "#f2f2f3",
  },
  {
    icon: <AiOutlineMail color="#ea5455" size={"18"} />,
    label: "Unsubscribe",
    value: "86",
    ratio: "0.8%",
    bg: "#fce5e6",
  },
];
function Content3() {
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

  return (
    <div>
      {/* {{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} */}
      <Grid
        // bg={backgroundColor}
        mt={"6"}
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(3,1fr)" }}
        gap={"6"}
      >
        {/* **********************************************1 */}
        {/* <GridItem rounded={"md"} bg={"white"} p={"6"}> */}
        <GridItem boxShadow={"md"} rounded={"md"} p={"6"} bg={whitetheme}>
          <Box>
            <Text fontSize={"md"} textColor={titleColor}>
              Sales by Countries
            </Text>
            <Text textColor={smallColor} fontSize={"xs"}>
              Monthly Sales Overview
            </Text>
            <Box>
              <ul>
                {table1Data.map((item, index) => (
                  <Box key={index}>
                    {/* <Text>{item.sales}</Text> */}
                    <Flex mt={"5"} gap={"3"} alignItems={"center"}>
                      <Image
                        //   mr={"6"}
                        // src={usa}
                        src={item.src}
                        alt="s"
                        w={8}
                        h={8}
                        borderRadius="full"
                      />
                      <Box>
                        <Text fontSize={"sm"} textColor={titleColor}>
                          {item.sales}
                        </Text>
                        <Text textColor={smallColor} fontSize={"xs"}>
                          {item.country}{" "}
                        </Text>
                      </Box>
                      <Spacer />
                      <Flex
                        alignItems={"center"}
                        textColor={
                          item.icon.type === FaAngleDown ? "red" : "green.400"
                        }
                        fontSize={"sm"}
                        gap={"1"}
                      >
                        <Text>
                          {/* <FaAngleUp /> */}
                          {item.icon}
                        </Text>
                        <Text
                        //
                        >
                          {item.value}
                        </Text>
                        {/* </Text> */}
                      </Flex>
                    </Flex>
                  </Box>
                ))}
              </ul>
            </Box>
          </Box>
        </GridItem>

        {/* #######################################box 2 */}
        {/* <GridItem bg={"white"} rounded={"md"} p={"6"}> */}
        <GridItem boxShadow={"md"} rounded={"md"} p={"6"} bg={whitetheme}>
          <Box>
            <Text fontSize={"md"} textColor={titleColor}>
              Total Earning{" "}
            </Text>
            <Flex alignItems={"center"} gap={"4"}>
              <Text
                textColor={titleColor}
                // fontWeight={"semibold"}
                fontSize={"4xl"}
                letterSpacing={"0.10rem"}
              >
                87%{" "}
              </Text>
              <Flex gap={"1"} textColor={"green.400"} fontSize={"sm"}>
                <FaAngleUp />

                <Text>25.8% </Text>
              </Flex>
            </Flex>
            <Image
              mr={"6"}
              src={linechart}
              alt="s"
              w={350}
              h={200}
              // borderRadius="full"
            />
            {/* <CombinationChart /> */}
            <Flex mt={"4"} alignItems={"center"} justifyContent={"center"}>
              <Box mt={"3"}>
                <Flex gap={"3"} alignItems={"center"}>
                  <Box p={"1"} bg={"#eae8fd"} rounded={"md"}>
                    <TbCurrencyDollar color="#7367f0" size={"20"} />
                  </Box>
                  <Box>
                    <Text fontSize={"sm"} textColor={titleColor}>
                      Total Sales{" "}
                    </Text>
                    <Text textColor={smallColor} fontSize={"xs"}>
                      Refund
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Spacer />
              <Box>
                <Text gap={"1"} textColor={"green.400"} fontSize={"md"}>
                  +$98
                </Text>
              </Box>
            </Flex>{" "}
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Box mt={"3"}>
                <Flex gap={"3"} alignItems={"center"}>
                  <Box p={"1"} bg={"#eae8fd"} rounded={"md"}>
                    <TbCurrencyDollar color="#7367f0" size={"20"} />
                  </Box>
                  <Box>
                    <Text fontSize={"sm"} textColor={titleColor}>
                      Total Revenue
                    </Text>
                    <Text textColor={smallColor} fontSize={"xs"}>
                      Client Payment
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Spacer />
              <Box>
                <Text gap={"1"} textColor={"green.400"} fontSize={"md"}>
                  +$126
                </Text>
              </Box>
            </Flex>{" "}
          </Box>
        </GridItem>
        {/* #######################################box 3 */}

        {/* <GridItem bg={"white"} rounded={"md"} p={"6"}> */}
        <GridItem boxShadow={"md"} rounded={"md"} p={"6"} bg={whitetheme}>
          <Box>
            <Text fontSize={"md"} textColor={titleColor}>
              Monthly Campaign State
            </Text>
            <Text textColor={smallColor} fontSize={"xs"}>
              8.52k Social Visiters
            </Text>
            {table2Data.map((item, index) => (
              <Flex
                mt={"3"}
                alignItems={"center"}
                justifyContent={"center"}
                key={index}
              >
                <Box mt={"3"}>
                  <Flex gap={"3"} alignItems={"center"}>
                    <Box p={"2"} bg={item.bg} rounded={"md"}>
                      {/* <TbCurrencyDollar color="#7367f0" size={"20"} /> */}
                      {item.icon}
                    </Box>
                    <Box>
                      <Text fontSize={"sm"} textColor={titleColor}>
                        {item.label}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Spacer />
                <Flex gap={"2"}>
                  <Text fontSize={"sm"} textColor={pColor}>
                    {item.value}
                  </Text>

                  <Text gap={"1"} textColor={"green.400"} fontSize={"sm"}>
                    {/* 0.3% */}
                    {item.ratio}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Content3;

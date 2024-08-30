import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Progress,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsCart } from "react-icons/bs";
// import barchart from "../images/barchart.png";
import progressChart from "../images/progresschart.png";
import { TbCurrencyDollar } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { useCustomTheme } from "../theme";
import { RiPaypalLine } from "react-icons/ri";
import BarChartt from "./BarChartt";
import MyProgressBar from "./Progress";

function Content2() {
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

  const content2 = [
    {
      label1: "Earning Reports",
      label2: "Weekly Earnings Overview",
      label3: "$468",
      label4: "+4.2%",
      label5: "You informed of this week compared to last week",
      label6: "Support Tracker",
      label7: "Last 7 Days",
      label8: "164",
      label9: "Total Tickets",
      // label10: "Complete",
    },
    {
      data: [
        {
          label: "Earnings",
          value: "$545.69",
          value2: "65",
          colorScheme: "purple",
          bg: "#eae8fd",
          bgProgress: "#E8E8E8",
          icon: <TbCurrencyDollar color="#7367f0" size={"20"} />,
        },
        {
          label: "Profit",
          value: "$256.34",
          value2: "50",
          colorScheme: "cyan",
          bg: "#d9f8fc",
          bgProgress: "#E8E8E8",
          icon: <CiClock2 color="#00cfe8" size={"20"} />,
        },
        {
          label: "Expense",
          value: "$74.19",
          value2: "65",
          colorScheme: "red",
          bg: "#fce5e6",
          bgProgress: "#E8E8E8",
          icon: <RiPaypalLine color="#ea5455" size={"20"} />,
        },
      ],
    },
    {
      data2: [
        {
          label1: "New Tickets",
          label2: "142",
          bg: "#eae8fd",
          icon2: <TbCurrencyDollar color="#7367f0" size={"20"} />,
        },
        {
          label1: "Open Tickets",
          bg: "#d9f8fc",
          label2: "28",
          icon2: <CiClock2 color="#00cfe8" size={"20"} />,
        },
        {
          label1: "Response Time",
          label2: "1 Day",
          bg: "#fce5e6",
          icon2: <RiPaypalLine color="#ea5455" size={"20"} />,
        },
      ],
    },
    {
      graph: [
        {
          label: "Completed Task",
          value: "85%",
        },
      ],
    },
  ];
  const {
    label1,
    label2,
    label3,
    label4,
    label5,
    label6,
    label7,
    label8,
    label9,
  } = content2[0];
  const { data } = content2[1];
  const { data2 } = content2[2];
  // export const { graph } = content2[3].;
  return (
    <div>
      <Grid
        mt={"6"}
        // h={"360px"}
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={4}
        // bg={backgroundColor}
      >
        {/* *(**********************************************************1) */}
        {/* <GridItem bg="white" p={"6"} rounded={"md"}> */}
        <GridItem p={"6"} rounded={"md"} bg={whitetheme} boxShadow={"md"}>
          <Box>
            <Flex>
              <Box>
                <Text fontSize={"md"} textColor={titleColor}>
                  {/* Earning Reports */}
                  {label1}
                </Text>
                <Text textColor={pColor} fontSize={"xs"}>
                  {/* Weekly Earnings Overview */}
                  {label2}
                </Text>
                <Flex mt={"12"} alignItems={"center"} gap={"3"}>
                  <Text
                    textColor={titleColor}
                    fontWeight={"semibold"}
                    fontSize={"4xl"}
                    letterSpacing={"0.10rem"}
                  >
                    {label3}
                    {/* $468 */}
                  </Text>
                  <Box
                    h={"fit-content"}
                    px={"2"}
                    bg={"#dff7e9"}
                    rounded={"md"}
                    textColor={"#28c76f"}
                    fontSize={"xs"}
                    py={"0.5"}
                  >
                    {/* <BsSuitcaseLg color="#28c76f" />+4.2% */}
                    {label4}
                  </Box>
                </Flex>
                <Text textColor={pColor} fontSize={"xs"} mr={"6"}>
                  {/* You informed of this week compared to last week */}
                  {label5}
                </Text>
              </Box>
              <BarChartt />
            </Flex>

            <Box
              mt={"5"}
              border={"1px"}
              p={"4"}
              rounded={"md"}
              borderColor={"#a5a3ae"}
            >
              <Grid templateColumns="repeat(3, 1fr)" gap={0}>
                {/* *****separate box */}
                {/* <Box>
                  <Box>
                    <Flex gap={"2"} alignItems={"center"}>
                      <Box p={"1"} bg={"#eae8fd"} rounded={"md"}>
                        <TbCurrencyDollar color="#7367f0" size={"20"} />
                      </Box>
                      <Text textColor={titleColor} fontSize={"sm"}>
                        Earnings
                      </Text>
                    </Flex>{" "}
                  </Box>
                  <Box mt={"2"}>
                    <Text
                      textColor={titleColor}
                      fontWeight={"normal"}
                      fontSize={"xl"}
                    >
                      $545.69
                    </Text>
                    <Progress
                      mt={"2"}
                      w={"32"}
                      //   size="xs"
                      value={65}
                      height={"1"}
                      rounded={"lg"}
                      colorScheme={"purple"}
                      bg={"#E8E8E8"}
                    />
                  </Box>
                </Box> */}

                {data.map((item, index) => (
                  <Box key={index}>
                    <Box>
                      <Flex gap={"2"} alignItems={"center"}>
                        <Box p={"1"} bg={item.bg} rounded={"md"}>
                          {item.icon}
                        </Box>
                        <Text textColor={titleColor} fontSize={"sm"}>
                          {item.label}
                        </Text>
                      </Flex>{" "}
                    </Box>
                    <Box mt={"2"}>
                      <Text
                        textColor={titleColor}
                        fontWeight={"normal"}
                        fontSize={"xl"}
                      >
                        {item.value}
                      </Text>
                      <Progress
                        mt={"2"}
                        w={"32"}
                        //   size="xs"
                        value={item.value2}
                        height={"1"}
                        rounded={"lg"}
                        colorScheme={item.colorScheme}
                        bg={item.bgProgress}
                      />
                    </Box>
                  </Box>
                ))}

                {/* <Box>
                  <Box>
                    <Flex gap={"2"} alignItems={"center"}>
                      <Box p={"1"} bg={"#d9f8fc"} rounded={"md"}>
                        <CiClock2 color="#00cfe8" size={"20"} />
                      </Box>
                      <Text textColor={titleColor} fontSize={"sm"}>
                        Profit
                      </Text>
                    </Flex>{" "}
                  </Box>
                  <Box mt={"2"}>
                    <Text
                      textColor={titleColor}
                      fontWeight={"normal"}
                      fontSize={"xl"}
                    >
                      $256.34
                    </Text>
                    <Progress
                      mt={"2"}
                      w={"32"}
                      //   size="xs"
                      value={65}
                      height={"1"}
                      rounded={"lg"}
                      colorScheme={"cyan"}
                      bg={"#E8E8E8"}
                    />
                  </Box>
                </Box> */}
                {/* <Box>
                  <Box>
                    <Flex gap={"2"} alignItems={"center"}>
                      <Box p={"1"} bg={"#fce5e6"} rounded={"md"}>
                        <RiPaypalLine color="#ea5455" size={"20"} />
                      </Box>
                      <Text textColor={titleColor} fontSize={"sm"}>
                        Expense
                      </Text>
                    </Flex>{" "}
                  </Box>
                  <Box mt={"2"} alignItems={"center"}>
                    <Text
                      textColor={titleColor}
                      fontWeight={"normal"}
                      fontSize={"xl"}
                    >
                      $74.19
                    </Text>
                    <Progress
                      mt={"2"}
                      w={"32"}
                      value={65}
                      height={"1"}
                      rounded={"lg"}
                      colorScheme={"red"}
                      bg={"#E8E8E8"}
                    />
                  </Box>
                </Box> */}
              </Grid>
            </Box>
          </Box>
        </GridItem>

        {/* *(**********************************************************Grid item 2) */}

        {/* <GridItem bg="white" p={"6"} rounded={"md"}> */}
        <GridItem p={"5"} rounded={"md"} bg={whitetheme} boxShadow={"md"}>
          <Box>
            {/* <Flex> */}
            <Flex alignItems={"center"} gap={"6"}>
              <Box>
                <Box>
                  <Text fontSize={"md"} textColor={titleColor}>
                    {label6}
                  </Text>
                  <Text textColor={smallColor} fontSize={"xs"}>
                    {label7}
                  </Text>
                  {/* <Flex mt={"8"} alignItems={"center"} gap={"3"}> */}
                  <Text
                    mt={"6"}
                    textColor={titleColor}
                    fontWeight={"semibold"}
                    fontSize={"4xl"}
                    letterSpacing={"0.10rem"}
                  >
                    {label8}
                  </Text>
                  {/* </Flex> */}
                  <Text textColor={pColor} fontSize={"sm"}>
                    {label9}
                  </Text>
                </Box>
                {/* ***********tickets array */}
                <Box rounded={"md"} borderColor={pColor}>
                  {data2.map((item, index) => (
                    <Flex key={index} flexDirection={"column"} gap={"2"}>
                      {/* <Box> */}
                      <Box mt={"6"}>
                        <Flex gap={"3"} alignItems={"center"}>
                          {/* <Box key={index}> */}
                          <Box p={"1"} bg={item.bg} rounded={"md"}>
                            {/* <TbCurrencyDollar color="#7367f0" size={"20"} /> */}
                            {item.icon2}
                          </Box>
                          <Box>
                            <Text fontSize={"sm"} textColor={titleColor}>
                              {/* New Tickets{" "} */}
                              {item.label1}
                            </Text>
                            <Text textColor={smallColor} fontSize={"xs"}>
                              {item.label2}
                            </Text>
                          </Box>
                          {/* </Box> */}
                          {/* ))} */}
                        </Flex>{" "}
                      </Box>
                      {/* </Box> */}
                      {/* <Spacer /> */}
                      {/* <Box>
                      <Box>
                        <Flex gap={"3"} alignItems={"center"}>
                          <Box p={"1"} bg={"#d9f8fc"} rounded={"md"}>
                            <CiClock2 color="#00cfe8" size={"20"} />
                          </Box>
                          <Box>
                            <Text fontSize={"sm"} textColor={titleColor}>
                              Open Tickets
                            </Text>
                            <Text textColor={smallColor} fontSize={"xs"}>
                              28
                            </Text>
                          </Box>
                        </Flex>{" "}
                      </Box>
                    </Box> */}
                      {/* <Spacer /> */}
                      {/* <Box>
                      <Box>
                        <Flex gap={"3"} alignItems={"center"}>
                          <Box p={"1"} bg={"#fce5e6"} rounded={"md"}>
                            <RiPaypalLine color="#ea5455" size={"20"} />
                          </Box>
                          <Box>
                            <Text fontSize={"sm"} textColor={titleColor}>
                              Response Time
                            </Text>
                            <Text textColor={smallColor} fontSize={"xs"}>
                              1 Day
                            </Text>
                          </Box>
                        </Flex>{" "}
                      </Box>
                    </Box> */}
                    </Flex>
                  ))}
                </Box>
              </Box>
              {/* *********************progress chart */}
              <Spacer />
              <Box>
                {/* <Image
                  //   mr={"6"}
                  src={progressChart}
                  alt="progressChart"
                  w={370}
                  h={230}
                  // borderRadius="full"
                /> */}
                <MyProgressBar />
              </Box>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Content2;

import { Flex, Grid, GridItem, Spacer, Box, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { RiPaypalLine } from "react-icons/ri";
import { TbCurrencyDollar } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { HiMinusSmall } from "react-icons/hi2";
import { useCustomTheme } from "../theme";
import DataTableComponent from "./DataTableComponent";
// import DataTable from "react-data-table-component";

const table1Data = [
  {
    icon: <AiOutlineMail size={"18"} />,
    icon2: <GoPlus />,
    label: "Emails",
    value: "1.2k",
    ration: "0.3%",
    text: "Direct link click",
  },
  {
    icon: <GoLink size={"18"} />,
    label: "Opened",
    value: "31.5k",
    ration: "2.1%",
    icon2: <GoPlus />,
    text: "Social Channels",
  },
  {
    icon: <TbCurrencyDollar size={"18"} />,
    label: "Clicked",
    value: "893",
    ration: "1.4%",
    icon2: <GoPlus />,
    text: "Mail Campaigns",
  },
  {
    icon: <CiClock2 size={"18"} />,
    label: "Subscribe",
    value: "342",
    ration: "0.4%",
    icon2: <HiMinusSmall />,
    text: "Impact Radius Visits",
  },
  {
    icon: <RiPaypalLine size={"18"} />,
    label: "Complaints",
    value: "2.15k",
    ration: "1.5%",
    icon2: <GoPlus />,
    text: "Google ADVT",
  },
  {
    icon: <AiOutlineMail size={"18"} />,
    label: "Unsubscribe",
    value: "12.5k",
    ration: "0.8%",
    icon2: <GoPlus />,
    text: "Many Sources",
  },
];
function Content4() {
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
      <Grid
        // templateColumns={"repeat(3,1fr)"}
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        // bg={backgroundColor}
        gap={"6"}
        mt={"6"}
      >
        {/* ***************************************grid1 */}
        <GridItem
          boxShadow={"md"}
          bg={whitetheme}
          colSpan={"1"}
          rounded={"md"}
          p={"6"}
        >
          {" "}
          <Box>
            <Text fontSize={"md"} textColor={titleColor}>
              Source Visits
            </Text>
            <Text textColor={smallColor} fontSize={"xs"}>
              38.4k Visitors
            </Text>
            {table1Data.map((item, index) => (
              <Flex
                mt={"2"}
                alignItems={"center"}
                justifyContent={"center"}
                key={index}
              >
                <Box mt={"3"}>
                  <Flex gap={"3"} alignItems={"center"}>
                    <Box
                      p={"2"}
                      bg={"#f2f2f3"}
                      rounded={"md"}
                      textColor={"#a8aaae"}
                    >
                      {/* <TbCurrencyDollar color="#7367f0" size={"20"} /> */}
                      {item.icon}
                    </Box>
                    <Box>
                      {/* <Text fontSize={"sm"} textColor={"#5d596c"}>
                        {item.label}
                      </Text> */}
                      <Text fontSize={"sm"} textColor={titleColor}>
                        {item.label}
                      </Text>
                      <Text textColor={smallColor} fontSize={"xs"}>
                        {item.text}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Spacer />
                <Flex gap={"2"}>
                  <Text fontSize={"sm"} textColor={pColor}>
                    {item.value}
                  </Text>

                  {/* <Text gap={"1"} textColor={"green.400"} fontSize={"sm"}>
                    0.3%
                  </Text> */}
                  <Box
                    h={"fit-content"}
                    px={"2"}
                    // bg={"#dff7e9"}
                    bg={item.icon2.type === GoPlus ? "#dff7e9" : "#fce5e6"}
                    textColor={
                      item.icon2.type === GoPlus ? "#28c76f" : "#ea5455"
                    }
                    // bg={"#dff7e9"}
                    rounded={"md"}
                    // textColor={"#28c76f"}
                    fontSize={"xs"}
                    py={"0.5"}
                  >
                    <Flex alignItems={"center"}>
                      {/* <GoPlus /> */}
                      {item.icon2}
                      {item.ration}
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Box>
        </GridItem>
        {/* ************************************************************************grid2 */}
        <GridItem
          boxShadow={"md"}
          colSpan={"2"}
          bg={whitetheme}
          rounded={"md"}
          pt={"4"}
        >
          <Box>
            <DataTableComponent />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Content4;

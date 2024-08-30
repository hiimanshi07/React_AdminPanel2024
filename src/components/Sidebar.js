import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  Flex,
  Grid,
  HStack,
  Heading,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import image from "../images/finalllogo.png";
import { BsLayoutSidebar } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { RiHomeSmileLine } from "react-icons/ri";
import { VscFiles } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { useCustomTheme } from "../theme";
import { VscCircleLarge } from "react-icons/vsc";
import { LiaDotCircleSolid } from "react-icons/lia";
import { LiaCircle } from "react-icons/lia";

const SidebarData = [
  {
    icon: <RiHomeSmileLine size={18} />,
    label: "Dashboards",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <BsLayoutSidebar size={18} />,
    label: "Layouts",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <VscFiles size={18} />,
    label: "Front Pages",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <AiOutlineMail size={18} />,
    label: "Email",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  // Add more items as needed
  {
    icon: <CiCalendar size={18} />,
    label: "Calender",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <RiHomeSmileLine size={18} />,
    label: "Dashboards",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <BsLayoutSidebar size={18} />,
    label: "Layouts",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <VscFiles size={18} />,
    label: "Front Pages",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <AiOutlineMail size={18} />,
    label: "Email",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  // Add more items as needed
  {
    icon: <CiCalendar size={18} />,
    label: "Calender",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <RiHomeSmileLine size={18} />,
    label: "Dashboards",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <BsLayoutSidebar size={18} />,
    label: "Layouts",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <VscFiles size={18} />,
    label: "Front Pages",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <AiOutlineMail size={18} />,
    label: "Email",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  // Add more items as needed
  {
    icon: <CiCalendar size={18} />,
    label: "Calender",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <AiOutlineMail size={18} />,
    label: "Email",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  // Add more items as needed
  {
    icon: <CiCalendar size={18} />,
    label: "Calender",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <RiHomeSmileLine size={18} />,
    label: "Dashboards",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <BsLayoutSidebar size={18} />,
    label: "Layouts",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <VscFiles size={18} />,
    label: "Front Pages",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <AiOutlineMail size={18} />,
    label: "Email",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  // Add more items as needed
  {
    icon: <CiCalendar size={18} />,
    label: "Calender",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <RiHomeSmileLine size={18} />,
    label: "Dashboards",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <BsLayoutSidebar size={18} />,
    label: "Layouts",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
  {
    icon: <VscFiles size={18} />,
    label: "Front Pages",
    link: "#",
    panel: ["Analytik", "CRM", "E-Commerce", "logistic", "Academy"],
  },
];

function Sidebar({ setSidebarLocked }) {
  const {
    gridColor,
    pColour,
    smallColor,
    pColor,
    titleColor,
    backgroundColor,
    whitetheme,
  } = useCustomTheme();
  // const { secondaryColor, gridColor, textColor } = useCustomTheme();

  const [lock, setLock] = useState(false);
  const toggleIcon = () => {
    setLock((prev) => !prev);
    setSidebarLocked((prev) => !prev);
  };
  return (
    <Box
      display={{ base: "none", md: "block" }}
      overflow={"hidden"}
      position={"sticky"}
      top={0}
      left={0}
      zIndex={111111111}
    >
      {/* {/ Sidebar Sidebar; /} */}
      <Flex
        pl={"3"}
        height={"100vh"}
        overflowY={"scroll"}
        bg={whitetheme}
        justifyContent={"center"}
        width={lock ? { md: "17vw" } : { md: "8vw", lg: "5.5vw" }}
        transition="width 0.3s"
        _hover={{
          w: "17vw",
          // overflow: "hidden",
          ".hover-menu": { display: "block" },
        }}
      >
        <Grid>
          <Flex
            gap={"1"}
            position={"sticky"}
            top={3}
            left={0}
            bg={gridColor}
            // boxShadow={"md"}
            color={"red"}
            // boxShadow={0px 4px 6px {"red"}}
            boxShadow="6px 6px 20px 6px rgba(255, 255, 255)"
            // overflow={"hidden"}
            mt={"5"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* <Image w={"22"} h={"22"} ml={"2"} mt={"2"} src={image} /> */}
            {/* <Image w={"22"} h={"22"} mt={"2"} src={image} /> */}
            <Image w={"22"} h={"22"} src={image} />
            <Heading
              size={"md"}
              display={lock ? "block" : "none"}
              className="hover-menu"
              // mt={"1.5"}
              ml={"1"}
              textColor={titleColor}
            >
              Vuexy
            </Heading>
            <Spacer />
            {/* {/ """"""""""""""""""""""""""""""""lock /} */}
            <IconButton
              aria-label="sidebar lock"
              // mt={"0"}
              _hover={{ bg: "none" }}
              bg={"none"}
              // right={"0"}
              onClick={toggleIcon}
              className="hover-menu"
              display={lock ? "block" : "none"}
              icon={
                lock ? (
                  <LiaDotCircleSolid size={"22"} />
                ) : (
                  <LiaCircle size={"22"} />
                )
              }
            />
          </Flex>
          {SidebarData.map((item, index) => (
            <List listStyleType={"none"} spacing={6}>
              <ListItem pl={"2.5"} key={index}>
                <Flex gap={"1"}>
                  <Box mt={"3"} textcolor={titleColor}>
                    {" "}
                    {item.icon}
                  </Box>
                  <Box
                    transition="width 0.5s"
                    className="hover-menu"
                    display={lock ? "block" : "none"}
                    S
                    bg={whitetheme}
                    fontSize={"sm"}
                    _hover={{ bg: "none" }}
                  >
                    <Accordion borderColor="transparent" w={"44"} allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box
                              as="span"
                              fontSize={"sm"}
                              flex="1"
                              textAlign="left"
                              textColor={titleColor}
                            >
                              {item.label}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} w={"44"}>
                          {item.panel.map((panelItem, panelIndex) => (
                            <li key={panelIndex}>
                              <Flex gap={"2"} alignItems={"center"}>
                                <VscCircleLarge size={"8"} />
                                <Text textColor={titleColor}>
                                  {" "}
                                  {panelItem}{" "}
                                </Text>
                              </Flex>
                            </li>
                          ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                </Flex>
              </ListItem>
            </List>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}

export default Sidebar;

import React from "react";
import {
  Avatar,
  AvatarBadge,
  Badge,
  Box,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiLanguage } from "react-icons/hi2";
import { LuSunMedium } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useCustomTheme } from "../theme";
import { LuMoon } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
function Searchbar() {
  const {
    gridColor,
    pColour,
    smallColor,
    pColor,
    titleColor,
    backgroundColor,
    whitetheme,
  } = useCustomTheme();
  const [theme, setTheme] = useState("light");

  const { colorMode, toggleColorMode } = useColorMode();
  const handleThemeChange = (selectedTheme) => {
    if (selectedTheme === "light" && theme !== "light") {
      setTheme("light");
      toggleColorMode("light");
    } else if (selectedTheme === "dark" && theme !== "dark") {
      setTheme("dark");
      toggleColorMode("dark");
    }
  };

  // const navbarIcon = [
  //   {
  //     label: "Light",
  //     icon: <LuSunMedium size={"16px"} />,
  //     onClick: () => handleThemeChange("dark"),
  //   },
  //   {
  //     label: "Dark",
  //     icon: <LuMoon size={"16px"} />,
  //     onClick: () => handleThemeChange("light"),
  //   },
  //   {
  //     label: "System",
  //     icon: <RiComputerLine size={"16px"} />,
  //     onClick: () => handleThemeChange("dark"),
  //   },
  // ];

  const navbarIcon = [
    {
      label: "Light",
      icon: <LuSunMedium size={"16px"} />,
      onClick: () => handleThemeChange("light"),
    },
    {
      label: "Dark",
      icon: <LuMoon size={"16px"} />,
      onClick: () => handleThemeChange("dark"),
    },
    {
      label: "System",
      icon: <RiComputerLine size={"16px"} />,
      onClick: () => handleThemeChange("system"), // Assuming you want to handle system theme here
    },
  ];

  return (
    <div>
      <Box position="sticky" top={0} zIndex={10}>
        <Box boxShadow={"md"} bg={whitetheme} py={"0.5"} rounded={"lg"}>
          <HStack alignItems={"center"} gap={"4"} px={"6"}>
            <CiSearch size={"28px"} color={titleColor} />
            <Input
              textColor={pColor}
              variant="unstyled"
              p={"3"}
              placeholder="Search (Ctrl+/)"
              _placeholder={{ color: smallColor }}
            />

            <HiLanguage size={"26px"} color={titleColor} />

            {/* ***************************************theme  menu start */}

            <Menu placement="bottom-end">
              <MenuButton>
                {/* <LuSunMedium size={"20px"} color={titleColor} /> */}
                {theme === "light" ? (
                  <LuSunMedium size={"20px"} color={titleColor} />
                ) : (
                  <LuMoon size={"20px"} color={titleColor} />
                )}
              </MenuButton>
              <MenuList minWidth={"130px"} fontSize={"xs"} px={"2"}>
                {navbarIcon.map((item, index) => (
                  <MenuItem
                    key={index}
                    icon={item.icon}
                    onClick={item.onClick}
                    color={titleColor}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            {/* ***************************************theme  menu end */}

            <AiOutlineAppstoreAdd size={"26px"} color={titleColor} />
            <Box position={"relative"}>
              <IoNotificationsOutline size={"20px"} color={titleColor} />
              <Badge
                bg="#ea5455"
                // position={"relative"}
                position={"absolute"}
                top={"-3"}
                right={"-2"}
                rounded={"full"}
                px={"1.5"}
                py={"0.5"}
                textColor={"white"}
                fontSize={"10px"}
              >
                2
              </Badge>
            </Box>
            {/* <Image
              borderRadius="full"
              boxSize="30px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            /> */}

            <Avatar
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              boxSize="35px"
            >
              <AvatarBadge boxSize="0.66em" bg="green.500" />
            </Avatar>
          </HStack>
        </Box>
      </Box>
    </div>
  );
}

export default Searchbar;

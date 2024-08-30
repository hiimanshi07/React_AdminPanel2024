import React, { useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import customTheme, { useCustomTheme } from "./theme";
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Searchbar from "./components/Searchbar";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import ScrollingBoxes from "./components/ScrollingBoxes";
import HeroSlider from "./components/AnimatedDiv";

const Components = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { secondaryColor, gridColor, textColor, backgroundColor } =
    useCustomTheme();
  // console.log("sdfsdfsgd", backgroundColor);
  //   const backgroundColor = useColorModeValue("red", "black");
  const [sidebarLocked, setSidebarLocked] = useState(false);

  return (
    <Box bg={backgroundColor}>
      {/* <Box /bg={"green"}> */}
      <Flex>
        <Box
          // position="sticky"
          // top={0}
          // zIndex={11111111}
          bg="blackAlpha.800"
          backdropFilter="auto"
          backdropBlur="6px"
        >
          <Sidebar
            setSidebarLocked={setSidebarLocked}
            height={"100vh"}
            // overflowY={"scroll"}
          />
        </Box>

        {/* <Box
          bg={backgroundColor}
          p={"4"}
          position={"absolute"}
          left={{ base: "0", md: sidebarLocked ? "17vw" : "6vw" }}
          transition="left 0.3s"
        > */}
        <Box
          bg={backgroundColor}
          p={"4"}
          // position={"absolute"}
          left={{ base: "0", md: sidebarLocked ? "17vw" : "6vw" }}
          transition="left 0.3s"
        >
          <Box position="sticky" top={3} zIndex={1111}>
            <Searchbar />
          </Box>
          {/* <ScrollingBoxes /> */}
          <Content />
          <Content2 />
          <Content3 />
          <Content4 />
          {/* <HeroSlider /> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Components;
// import React from "react";
// import Content from "./components/Content";
// import Sidebar from "./components/Sidebar";
// import customTheme, { useCustomTheme } from "./theme";
// import {
//   ChakraProvider,
//   Box,
//   Flex,
//   Grid,
//   useColorMode,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import Searchbar from "./components/Searchbar";
// import Content2 from "./components/Content2";
// import Content3 from "./components/Content3";
// import Content4 from "./components/Content4";

// const Components = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { secondaryColor, gridColor, textColor, backgroundColor } =
//     useCustomTheme();

//   // State to track if the sidebar is locked
//   const [sidebarLocked, setSidebarLocked] = React.useState(false);

//   return (
//     <Box bg={backgroundColor}>
//       <Flex>
//         {/* Sidebar component */}
//         <Box
//           position="sticky"
//           top={0}
//           zIndex={11111111}
//           bg="blackAlpha.800"
//           backdropFilter="auto"
//           backdropBlur="6px"
//         >
//           <Sidebar setSidebarLocked={setSidebarLocked} />
//         </Box>

//         {/* Content container */}
//         <Box
//           bg={backgroundColor}
//           p={"4"}
//           position={"absolute"}
//           left={{ base: "0", md: sidebarLocked ? "15vw" : "60px" }}
//           transition="left 0.3s"
//         >
//           <Box position="sticky" top={3} zIndex={1111}>
//             <Searchbar />
//           </Box>
//           <Content />
//           <Content2 />
//           <Content3 />
//           <Content4 />
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default Components;

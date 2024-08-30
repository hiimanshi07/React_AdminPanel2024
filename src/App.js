// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Admin from "./components/Admin";
// import Sidebar from "./components/Sidebar";
// import Content from "./components/Content";
// import {
//   Box,
//   Flex,
//   ChakraProvider,
//   Container,
//   extendTheme,
//   Heading,
//   ThemeConfig,
//   useColorMode,
//   useColorModeValue,
// } from "@chakra-ui/react";

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Flex>
//           <Box position={"relative"} zIndex={"11111"}>
//             <Sidebar />
//           </Box>
//           <Box position={"absolute"} left={"20"}>
//             <Content />
//           </Box>{" "}
//         </Flex>
//         {/* <Admin /> */}
//       </>
//     );
//   }
// }

// export default App;
// import React, { useState } from "react";
// import {
//   ChakraProvider,
//   Box,
//   Switch,
//   useColorMode,
//   Flex,
// } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
// import Content from "./components/Content";
// import Sidebar from "./components/Sidebar";

// const customTheme = extendTheme({
//   config: {
//     initialColorMode: "light",
//     useSystemColorMode: false,
//   },
//   colors: {
//     brand: {
//       500: "#ff5a5f",
//     },
//   },
// });

// const App = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [isDarkMode, setIsDarkMode] = useState(colorMode === "dark");

//   const handleThemeToggle = () => {
//     toggleColorMode();
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <ChakraProvider theme={customTheme}>
//       <Box textAlign="center" paddingTop="40px">
//         <Switch
//           colorScheme="brand"
//           isChecked={isDarkMode}
//           onChange={handleThemeToggle}
//         />
//         <Box paddingTop="20px">
//           {isDarkMode ? "Dark Mode" : "Light Mode"}
//           <Flex>
//             <Box position={"relative"} zIndex={"11111"}>
//               <Sidebar />
//             </Box>
//             <Box position={"absolute"} left={"20"}>
//               <Content />
//             </Box>
//           </Flex>
//         </Box>
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default App;
import React from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import customTheme, { useCustomTheme } from "./theme";
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  useColorMode,
} from "@chakra-ui/react";
import Searchbar from "./components/Searchbar";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import Components from "./Components";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { secondaryColor, gridColor, textColor, backgroundColor } =
    useCustomTheme();
  console.log("sdfsdfsgd", backgroundColor);

  return (
    <ChakraProvider theme={customTheme}>
      <Box>
        <Components />
      </Box>
      {/* <Box bg={backgroundColor}>
        <Grid>
          <Box zIndex={"11111"} position={"absolute"} top={"0"} bottom={"0"}>
            <Sidebar />
          </Box>
          <Box>
            <Box position={"absolute"} left={"20"} p={"4"}>
              <Searchbar />
              <Content />
              <Content2 />
              <Content3 />
              <Content4 />
            </Box>
          </Box>
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
};

export default App;

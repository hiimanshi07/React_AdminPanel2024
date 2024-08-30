// import React, { useState } from "react";
// import Header from "./Header";
// import {
//   Box,
//   Button,
//   Drawer,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   Flex,
//   HStack,
//   Input,
//   Spacer,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { IoMdClose } from "react-icons/io";

// function Admin() {
//   const [isBlueDivVisible, setIsBlueDivVisible] = useState(true);

//   const handleToggleBlueDiv = () => {
//     setIsBlueDivVisible(!isBlueDivVisible);
//   };

//   return (
//     <div>
//       <Header />
//       <Box bg={"red"} h={"calc(100vh - 10.5vh)"}>
//         <HStack>
//           <Flex
//             w={isBlueDivVisible ? "38vh" : 0}
//             h={"calc(100vh - 10.5vh)"}
//             bg={"blue"}
//           >
//             {/* <Button onClick={handleToggleBlueDiv}>Close</Button> */}
//             sda
//             <Spacer />
//             <IoMdClose
//               size={"20px"}
//               alignItems={"center"}
//               onClick={handleToggleBlueDiv}
//             />
//           </Flex>
//         </HStack>
//       </Box>{" "}
//       <>{/* <Button colorScheme="teal">Open</Button> */}</>
//     </div>
//   );
// }

// export default Admin;
// import React, { useState } from "react";
// import Header from "./Header";
// import { Box, Button, Flex, HStack, Spacer, Collapse } from "@chakra-ui/react";
// import { IoMdClose } from "react-icons/io";

// function Admin() {
//   const [isBlueDivVisible, setIsBlueDivVisible] = useState(true);

//   const handleToggleBlueDiv = () => {
//     setIsBlueDivVisible(!isBlueDivVisible);
//   };

//   return (
//     <div>
//       <Header />
//       <Box bg={"red"} h={"calc(100vh - 10.5vh)"}>
//         <HStack>
//           <Collapse in={isBlueDivVisible}>
//             <Flex bg="blue" w="38vh" h="100%" alignItems="center">
//               <Button onClick={handleToggleBlueDiv}>Close</Button>
//               sda
//               <Spacer />
//               <IoMdClose size={"20px"} alignItems={"center"} />
//             </Flex>
//           </Collapse>
//         </HStack>
//       </Box>{" "}
//     </div>
//   );
// }

// export default Admin;
import { Button, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Admin() {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);

  return (
    <div>
      <motion.div
        {...getDisclosureProps()}
        // hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{ width: isOpen ? 500 : 0 }}
        style={{
          background: "red",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
          left: "0",
          height: "100vh",
          top: "0",
        }}
      >
        welcome home
      </motion.div>
      <Button {...getButtonProps()}> {hidden ? "Show" : "hide"}</Button>
    </div>
  );
}

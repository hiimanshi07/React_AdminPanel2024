import { extendTheme, useColorMode, useColorModeValue } from "@chakra-ui/react";

// const lightTheme = {
//   colors: {
//     // Your light theme colors here
//     // primary: "",
//     secondary: "#FBCEB1",
//     background: "#fff",
//     text: "#000",
//   },
// };

// const darkTheme = {
//   colors: {
//     // Your dark theme colors here
//     // primary: "",
//     secondary: "#ffcc00",
//     background: "#171923",
//     text: "#fff",
//   },
// };

export const useCustomTheme = () => {
  const { toggleColorMode } = useColorMode();
  const secondaryColor = useColorModeValue("#FBCEB1", "#ffcc00");
  const backgroundColor = useColorModeValue("#F5F5F5", "#171923");
  const gridColor = useColorModeValue("#fff", "#171923");
  //   const pColour = useColorModeValue("#a5a3ae", "#7983bb");
  const titleColor = useColorModeValue("#5d596c", "#cfd3ec"); //42.5
  const smallColor = useColorModeValue("#a5a3ae", "#7983bb"); //6440 sales
  const pColor = useColorModeValue("#6f6b7d", "#b6bee3"); //order
  const whitetheme = useColorModeValue("#ffffff", "#2f3349");
  const progressbarbg = useColorModeValue("#f1f0f2", "#b6bee3");

  return {
    toggleColorMode,
    secondaryColor,
    gridColor,
    backgroundColor,
    smallColor,
    pColor,
    titleColor,
    whitetheme,
    progressbarbg,
  };
};

const customTheme = extendTheme({
  //   colors: {
  //     light: lightTheme.colors,
  //     dark: darkTheme.colors,
  //   },
  initialColorMode: "light", // Set your initial mode (light or dark)
});

export default customTheme;

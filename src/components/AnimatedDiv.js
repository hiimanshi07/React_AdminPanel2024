import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Flex,
  Checkbox,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import ball1 from "../images/ball1.png";
import ball2 from "../images/ball2.png";
import ball3 from "../images/ball3.png";

const HeroSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = [
    {
      id: 1,
      title: "Website Analytics",
      heading: "Total 28.5% Conversion Rate",
      label: "Traffic",
      src: ball1,
      //   value1: ["12", "230"],
      //   value2: ["12", "230"],
    },
    {
      id: 2,
      title: "Website Analytics",
      heading: "Total 28.5% Conversion Rate",
      label: "Spending",
      src: ball2,
    },
    {
      id: 3,
      title: "Website Analytics",
      heading: "Total 28.5% Conversion Rate",
      label: "Revenue Source",
      src: ball3,
    },
  ];

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setSlideIndex((prevIndex) => (prevIndex + 1) % slide.length);
  //     }, 2000);
  //     return () => clearInterval(interval);
  //   }, [slide.length]);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setSlideIndex((prevIndex) => {
  //         if (prevIndex === slide.length - 1) {
  //           // If current slide is the last one, reset to the first slide
  //           return 0;
  //         } else {
  //           // Otherwise, increment the index
  //           return prevIndex + 1;
  //         }
  //       });
  //     }, 2000);
  //     return () => clearInterval(interval);
  //   }, [slide.length]);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => {
        // Increment slide index, and if it reaches the end, loop back to the first slide
        return (prevIndex + 1) % slide.length;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [slide.length]);

  return (
    // <Box>
    <Box
      overflow="hidden"
      background="#23e3c9"
      textColor={"white"}
      rounded={"md"}
      bg="#7367f0"
      boxShadow={"md"}
      position={"relative"}
    >
      <Flex
        // className="hero__slides"
        width="400%"
        marginLeft={`-${slideIndex * 100}%`}
        transition="1s ease"
      >
        {slide.map((item, index) => (
          <Box key={index} width="25%" px={"6"} py={"6"}>
            <Box>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Box>
                  <Text fontSize={"xl"}> {item.title}</Text>
                  <Text fontSize={"xs"} mt={"1"}>
                    {/* Total 28.5% of Conversion{" "} */}
                    {item.heading}
                  </Text>
                  <Text fontSize={"sm"} mt={"4"} fontWeight={"normal"}>
                    {item.label}
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
                          268
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
                  //   mr={"4"}
                  src={item.src}
                  alt="s"
                  w={{ base: 100, md: 150, lg: 130, xl: 150 }}
                  h={150}
                  borderRadius="full"
                />
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
      <HStack position="absolute" top={"6"} right={"4"}>
        {slide.map((_, index) => (
          <Box
            key={index}
            //   className={`btn__auto auto-btn${index}`}
            // border="solid 2px white"
            padding="3.5px"
            borderRadius="50%"
            // transition="3s"
            background={slideIndex === index ? "white" : "#D8D6E3"}
          />
        ))}
      </HStack>
    </Box>
    // </Box>
  );
};

export default HeroSlider;

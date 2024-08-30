import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useCustomTheme } from "../theme";
// import { graphData } from "./Content2";
// import grapfrom
export default function MyProgressBar() {
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

  const percentage = 85;

  return (
    <Example>
      <div style={{ width: "220px", transform: "rotate(-240deg)" }}>
        <CircularProgressbarWithChildren
          value={percentage}
          //   text={`${percentage}%`}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: "butt",
            trailColor: "transparent",
            stroke: `url(#idCSS)`,
            // pathColor: "red",
            pathColor: `url(#gradient)`,
            // background-gradient: "linear-gradient(90deg, rgba(240,232,221,1) 0%, rgba(238,238,238,1) 43%)"
          })}
        >
          <svg style={{ height: 0 }}>
            <defs>
              <linearGradient
                id="gradient"
                // gradientTransform={gradientTransform}
              >
                {/* <stop offset="0%" stopColor="" /> */}
                <stop offset="0%" stopColor="#eae8fd" />
                {/* <stop offset="100%" stopColor="#" /> */}
                <stop offset="100%" stopColor="#7367f0" />
              </linearGradient>
            </defs>
          </svg>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            style={{
              transform: "rotate(240deg)",
            }}
          >
            <Text fontSize={"xs"} textColor={smallColor}>
              Completed Task
              {/* {graphData.label} */}
            </Text>

            <Text fontSize={"2xl"} textColor={titleColor}>
              {percentage}%
            </Text>
          </Flex>
          <RadialSeparators
            count={37}
            style={{
              background: whitetheme,
              //   pathColor: "red",
              width: "7px",
              height: `${10}%`,
              //   textStyle: {
              //     fontSize: "12px",
              //     transform: "rotate(210deg)",
              //   },
            }}
          />
        </CircularProgressbarWithChildren>
      </div>
    </Example>
  );
}

function Example(props) {
  return (
    <div>
      <Box pr={"14"}>{props.children}</Box>
      <div style={{}}>{/* Add any additional content or props here */}</div>
    </div>
  );
}

import {
  Box,
  Divider,
  Flex,
  Input,
  Spacer,
  Text,
  Heading,
  HStack,
  Image,
  AvatarGroup,
  Avatar,
  Progress,
  Menu,
  MenuList,
  MenuButton,
  IconButton,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Pagination, { CustomPagination } from "./Pagination";
import { TbCurrencyDollar } from "react-icons/tb";
import image1 from "../images/2.png";
import image2 from "../images/3.png";
import image3 from "../images/8.png";
import image4 from "../images/10.png";
import { CiMenuKebab } from "react-icons/ci";
import { BiDotsVerticalRounded } from "react-icons/bi";

import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleUp,
} from "react-icons/fa";
import { color } from "framer-motion";
import { useCustomTheme } from "../theme";

function DataTableComponent() {
  const {
    secondaryColor,
    gridColor,
    pColour,
    smallColor,
    pColor,
    titleColor,
    backgroundColor,
    whitetheme,
    progressbarbg,
  } = useCustomTheme();
  const columns = [
    {
      name: (
        <Text
          fontSize={"10px"}
          textColor={titleColor}
          letterSpacing={"0.10rem"}
        >
          NAME
        </Text>
      ),
      selector: (row) => row.name,
      sortable: true,
      width: "200px",
      cell: (row) => (
        <Box my={"2"}>
          <Flex gap={"3"} alignItems={"center"}>
            {row.icon}
            <Box>
              <Text
                fontSize={"sm"}
                letterSpacing={"0.02rem"}
                textColor={titleColor}
              >
                {row.name}
              </Text>
              <Text
                mt={"1.5"}
                textColor={smallColor}
                fontSize={"10px"}
                letterSpacing={"0.06rem"}
              >
                {row.date}
              </Text>
            </Box>
          </Flex>
        </Box>
      ),
    },

    {
      name: (
        <Text
          fontSize={"10px"}
          textColor={titleColor}
          letterSpacing={"0.10rem"}
        >
          LEADER
        </Text>
      ),
      selector: (row) => row.leader,
      sortable: true,
      width: "90px",
      cell: (row) => (
        <Text
          fontSize={"13px"}
          letterSpacing={"0.02rem"}
          textColor={titleColor}
        >
          {row.leader}
        </Text>
      ),
    },

    {
      name: (
        <Text
          fontSize={"10px"}
          textColor={titleColor}
          letterSpacing={"0.10rem"}
        >
          TEAM
        </Text>
      ),
      // selector: (row) => row.team,
      width: "150px",
      cell: (row) => <>{row.avtargroup}</>,
    },
    {
      name: (
        <Text
          fontSize={"10px"}
          textColor={titleColor}
          letterSpacing={"0.10rem"}
        >
          STATUS
        </Text>
      ),
      // selector: (row) => row.status,
      // sortable: true,
      width: "190px",
      cell: (row) => (
        <Flex alignItems={"center"} gap={"3"}>
          <Box width={"28"}>
            <Progress
              value={parseInt(row.status)}
              height={"1.5"}
              rounded={"lg"}
              colorScheme={"purple"}
              bg={progressbarbg}
              // bgOpacity="10%"
              // opacity={"0.1"}
              // size="xs"
              // colorScheme="pink"
            />
          </Box>
          <Text textColor={pColor}> {row.status}%</Text>
        </Flex>
      ),
    },
    {
      name: (
        <Text
          fontSize={"10px"}
          textColor={titleColor}
          letterSpacing={"0.10rem"}
        >
          ACTION
        </Text>
      ),
      selector: (row) => row.action,
      // width: "100px",
      cell: () => (
        <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            bg={"none"}
            border={"none"}
            _hover={{ bg: "none" }}
            aria-label="Options"
            icon={<BiDotsVerticalRounded />}
            variant="outline"
          />
          <MenuList
            shadow={"lg"}
            textColor={titleColor}
            minWidth={"140px"}
            fontSize={"sm"}
            py={"3"}
          >
            <Box px={"2"}>
              <MenuItem rounded={"md"} _hover={{ bg: "#eae8fd" }} px={"3"}>
                Details
              </MenuItem>
              <MenuItem pt={"2"} rounded={"md"} _hover={{ bg: "#eae8fd" }}>
                Archive
              </MenuItem>
            </Box>
            <Divider borderColor={"#BFBECC"} pt={"3"} />
            <Box px={"2"} mt={"2"}>
              <MenuItem
                rounded={"md"}
                _hover={{ bg: "#eae8fd" }}
                textColor={"red"}
                px={"3"}
              >
                Delete
              </MenuItem>
            </Box>
          </MenuList>
        </Menu>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),
      name: "Crypto Admin",
      date: "10 May 2021",
      leader: "Allyson ",
      team: "20",
      status: "38",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Segun Adebayo" src={image4} />
          <Avatar name="Segun Adebayo" src={image2} />
          <Avatar name="Ryan Florence" src={image1} />
          <Avatar name="Ryan Florence" src={image3} />
        </AvatarGroup>
      ),
    },
    {
      id: 2,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),
      name: "Website SEO",
      date: "10 May 2021",
      leader: "Eileen",
      team: "20",
      status: "45",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Segun Adebayo" src={image2} />
          <Avatar name="Segun Adebayo" src={image4} />
        </AvatarGroup>
      ),
    },
    {
      id: 3,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),
      name: "App Design",
      date: "10 May 2021",
      leader: "Fred",
      team: "20",
      status: "92",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Ryan Florence" src={image3} />
          <Avatar name="Segun Adebayo" src={image2} />
          <Avatar name="Ryan Florence" src={image1} />
          <Avatar name="Segun Adebayo" src={image4} />
        </AvatarGroup>
      ),
    },
    {
      id: 4,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),
      name: "Admin Template",
      date: "10 May 2021",
      leader: "Genevra",
      team: "20",
      status: "56",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Ryan Florence" src={image3} />
          <Avatar name="Ryan Florence" src={image1} />
          <Avatar name="Segun Adebayo" src={image2} />
          <Avatar name="Segun Adebayo" src={image4} />
        </AvatarGroup>
      ),
    },
    {
      id: 5,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),
      name: "App Design",
      date: "10 May 2021",
      leader: "Fred",
      team: "20",
      status: "25",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Ryan Florence" src={image1} />
          <Avatar name="Segun Adebayo" src={image2} />
          <Avatar name="Segun Adebayo" src={image4} />
        </AvatarGroup>
      ),
    },
    {
      id: 6,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),
      name: "Admin Template",
      date: "10 May 2021",
      leader: "Genevra",
      team: "20",
      status: "36",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Segun Adebayo" src={image2} />
          <Avatar name="Segun Adebayo" src={image4} />
          <Avatar name="Ryan Florence" src={image3} />
        </AvatarGroup>
      ),
    },
    {
      id: 7,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),
      name: "App Design",
      date: "10 May 2021",
      leader: "Fred",
      team: "20",
      status: "72",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Ryan Florence" src={image1} />
          <Avatar name="Segun Adebayo" src={image2} />
          <Avatar name="Segun Adebayo" src={image4} />
        </AvatarGroup>
      ),
    },
    {
      id: 8,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),

      name: "Admin Template",
      date: "10 May 2021",
      leader: "Genevra",
      team: "20",
      status: "89",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Segun Adebayo" src={image4} />
        </AvatarGroup>
      ),
    },
    {
      id: 9,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),

      name: "Admin Template",
      date: "10 May 2021",
      leader: "Genevra",
      team: "20",
      status: "77",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Segun Adebayo" src={image2} />
          <Avatar name="Segun Adebayo" src={image4} />
        </AvatarGroup>
      ),
    },
    {
      id: 10,
      icon: (
        <Box p={"1.5"} bg={"#eae8fd"} rounded={"full"}>
          <TbCurrencyDollar color="#7367f0" size={"20"} />
        </Box>
      ),

      name: "Admin Template",
      date: "10 May 2021",
      leader: "Genevra",
      team: "20",
      status: "100",
      action: "20",
      avtargroup: (
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Segun Adebayo" src={image4} />
          <Avatar name="Segun Adebayo" src={image2} />
          <Avatar name="Ryan Florence" src={image1} />
          <Avatar name="Ryan Florence" src={image3} />
        </AvatarGroup>
      ),
    },
  ];

  const [records, setRecords] = useState(data);

  // **************************tablestyle

  const tableCustomStyles = {
    headRow: {
      style: {
        color: titleColor,
        backgroundColor: whitetheme,
      },
    },
    pagination: {
      style: {
        color: pColor,
        backgroundColor: whitetheme,
      },
    },
    rows: {
      style: {
        color: pColor,
        backgroundColor: whitetheme,
      },
    },
  };

  function handleFilter(event) {
    const searchString = event.target.value.toLowerCase();
    const newData = data.filter((row) => {
      for (const key in row) {
        if (
          row.hasOwnProperty(key) &&
          row[key].toString().toLowerCase().includes(searchString)
        ) {
          return true;
        }
      }
      return false;
    });
    setRecords(newData);
  }

  // const CustomPagination = ({ pagination }) => {
  //   const { currentPage, totalPages, onPageChange } = pagination;

  //   return (
  //     <div className="custom-pagination">
  //       {currentPage !== 1 && (
  //         <button onClick={() => onPageChange(currentPage - 1)}>
  //           Previous
  //         </button>
  //       )}
  //       <span>
  //         Page {currentPage} of {totalPages}
  //       </span>
  //       {currentPage !== totalPages && (
  //         <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <div>
      <Flex alignItems={"center"} px={"6"} pb={"4"}>
        <Heading fontSize={"md"} textColor={titleColor}>
          Projects
        </Heading>

        <Spacer />
        <Flex alignItems={"center"} gap={"2"}>
          <Text fontSize={"xs"} textColor={pColor}>
            Search:
          </Text>
          <Input onChange={handleFilter} h={"8"} fontSize={"xs"}></Input>
        </Flex>
      </Flex>
      <Divider />
      <Box height={"350px"}>
        {/* <Box overflowY={"scroll"} height={"350px"}> */}
        <Box>
          <DataTable
            columns={columns}
            data={records}
            selectableRows
            sortIcon={<FaAngleUp />}
            fixedHeader
            fixedHeaderScrollHeight="320px"
            pagination
            paginationRowsPerPageOptions={[5, 10]}
            customStyles={tableCustomStyles}
            tionPerPage={false}

            // paginationRowsPerPageOptions={[]}
            // paginationComponentOptions={{ rowsPerPageText: "" }}
            // paginationIconNext={"Next"}
            // paginationIconPrevious={"Previous"}
          ></DataTable>
        </Box>
      </Box>
    </div>
  );
}

export default DataTableComponent;

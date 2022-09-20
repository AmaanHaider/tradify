import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import Pagination from "./Pagination";
import ModalButton from "./ModalButton";


const JobsPage = () => {
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(45);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsData = await axios.get(`https://remotive.com/api/remote-jobs`);
      const res = jobsData.data.jobs;
      setdata(res);
    };
    fetchJobs();
  }, []);
  //   console.log(data);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <Box>
      <Grid
        h="auto"
        gap={"30px"}
        w="80%"
        m="10px auto"
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
      >
        {currentPost.map((e) => (
          <Center py={6}>
            <Box w={"full"} boxShadow={"2xl"} rounded={"md"}>
              <Flex justify={"center"} mt={12}>
                <Avatar
                  size={"xl"}
                  src={e.company_logo}
                  alt={"Author"}
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    {e.company_name}
                  </Heading>
                  <Text color={"gray.500"}>{e.title}</Text>
                </Stack>
                <Center>
                  <Box>
                    <Text as="b">Location :</Text>
                    <Text as="samp"> {e.candidate_required_location}</Text>
                  </Box>
                </Center>

                <Box ml={12} p={2}>
                  {/* <Text as='b'>Description :</Text> */}
                  <Text as="samp">{}</Text>
                </Box>
                <Center>
                  {/* <Button
                    w={"40%"}
                    mt={8}
                    bg={useColorModeValue("#151f21", "gray.900")}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Apply
                  </Button> */}
                  <ModalButton/>

                </Center>
              </Box>
            </Box>
          </Center>
        ))}
      </Grid>
      <Box maxW={"900px"} m={"auto"}>
        <Center>
          <Text mt={5} mb={5}>
            Find More Jobs....
          </Text>
        </Center>
        <Center mb={10}>
          <Pagination
            totalPosts={data.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
          />
        </Center>
      </Box>
    </Box>
  );
};

export default JobsPage;

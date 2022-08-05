import { Box } from '@mui/material';
import { dehydrate, useQuery } from "react-query";
import Head from "next/head";
import Link from "next/link";
// import { Grid, Card, Image, Text, Title } from "@mantine/core";
import { queryClient, getJobs } from "../src/api";

export async function getServerSideProps() {
  await queryClient.prefetchQuery(["jobs"], () => getJobs());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home = () => {
  const { data } = useQuery(["jobs"], () => getJobs());
  
  return <Box>123</Box>;
};

export default Home;

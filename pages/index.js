import { Flex, Text, Button, Tabs, TabList, Tab, TabPanels, TabPanel, Box, Link } from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Nft from "../components/Nft";
import Profile from "../components/Profile";
import Send from "../components/Send";
import Transactions from "../components/Transactions";

export default function Home() {
  const {isAuthenticated, user, isAuthenticating, authenticate, logout, isLoggingOut} = useMoralis()
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | Dashboard</title>
        </Head>
        <Flex direction="column" justifyContent="center" alignItems="center" width="100vw" height="100vh ">
          <Text fontSize="5xl" fontWeight="bold" color="#0075be" >Dashboard</Text>
          <Button colorScheme="blue" size="lg" mt="6" onClick={() => authenticate({
            signingMessage: "Sign required to login in Dashboard"
          })} disabled={isAuthenticating}>Login with Metamask</Button>
        </Flex>
      </>
    )
  }
  return (
    <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <Flex direction="column" width="100vw" height="100vh">
      <Header isAuthenticated={isAuthenticated} isAuthenticating={isAuthenticating} user={user} authenticate={authenticate} logout={logout} isLoggingOut={isLoggingOut} />
      <Box flex="1" bg="white" px="52" py="20">
        <Tabs size="lg" align="center" variant="enclosed">
          <TabList>
            <Tab fontWeight="bold" >Profile</Tab>
            <Tab fontWeight="bold" >Balance</Tab>
            <Tab fontWeight="bold" >Transactions</Tab>
            <Tab fontWeight="bold" >Send ETH</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Profile user={user}/>
            </TabPanel>
            <TabPanel>
              <Balance user={user} />
            </TabPanel>
            <TabPanel>
              <Transactions user={user}/>
            </TabPanel>
            <TabPanel>
              <Send/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
   </>
  )
}

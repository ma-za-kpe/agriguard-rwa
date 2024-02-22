/* eslint-disable no-unused-vars */
import React from "react";

import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import "./farmerdata.css";
import FarmerForm from "./forms/FarmerForm";
import FarmForm from "./forms/FarmForm";

function FarmerData() {
  return (
    <>
      <Container
        backgroundColor="green"
        maxW="full"
        minH="100vh"
        display={"flex"}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        p={5}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab color="white">Farmer Info</Tab>
            <Tab color="white">Farm Info</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FarmerForm/>
            </TabPanel>
            <TabPanel>
              <FarmForm/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}

export default FarmerData;

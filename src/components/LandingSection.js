import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Kaleab!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
   <Avatar size="xl" src="https://i.pravatar.cc/150?img=7"/>
   <Heading as="h2" size="md" color="white" >{greeting}</Heading>
   <Box  marginTop="10">
      <Heading marginTop="10"as="h1" size="xl" color="white" >{bio1}</Heading>
   </Box>
   
   <Heading marginTop="10"as="h1" size="xl" color="white">{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;

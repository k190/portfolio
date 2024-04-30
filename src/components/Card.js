import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack borderRadius="md" borderWidth="1px" borderColor="gray.200" padding={4} spacing={4} backgroundColor="white" boxShadow="md" maxWidth="400px" color="black">
      <Image src={imageSrc} alt={title} borderRadius="md"/>
      <VStack spacing={2} alignItems="flex-start">
        <Heading as="h2"  size="md">
          {title}
        </Heading>
        <Text >{description}</Text>
      </VStack>
      <HStack justifyContent="flex-end">
        <FontAwesomeIcon icon={faArrowRight} size="1x"/>
      </HStack>
    </VStack>
  );
};

export default Card;

import { Container, Text, VStack } from "@chakra-ui/react";
import Map from "../components/Map";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Map of Pumps in Stockholm</Text>
        <Map />
      </VStack>
    </Container>
  );
};

export default Index;
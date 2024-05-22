import { Box, Container, VStack, Text, Image, Grid, GridItem, Link, Flex, Heading, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" p={4}>
        <Flex maxW="container.xl" mx="auto" justify="space-between" align="center">
          <Heading as="h1" size="lg">ElectroShop</Heading>
          <Flex>
            <Link href="/" p={2}>Home</Link>
            <Link href="/products" p={2}>Products</Link>
            <Link href="/about" p={2}>About Us</Link>
            <Link href="/contact" p={2}>Contact Us</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Box flex="1" p={5}>
              <Heading as="h2" size="xl" mb={4}>Featured Product: Ultra HD 4K TV</Heading>
              <Text fontSize="lg" mb={6}>Experience the best quality with our latest Ultra HD 4K TV. Perfect for your home entertainment.</Text>
              <Button colorScheme="blue" size="lg">Shop Now</Button>
            </Box>
            <Box flex="1" p={5}>
              <Image src="https://via.placeholder.com/500" alt="Featured Product" borderRadius="md" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={6}>Our Products</Heading>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
            {Array.from({ length: 6 }).map((_, index) => (
              <GridItem key={index} bg="white" p={5} borderRadius="md" boxShadow="md">
                <Image src="https://via.placeholder.com/300" alt={`Product ${index + 1}`} mb={4} />
                <Text fontSize="lg" fontWeight="bold">Product {index + 1}</Text>
                <Text fontSize="md" color="gray.600">$199.99</Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</Text>
            <Flex>
              <Link href="https://facebook.com" isExternal p={2}><FaFacebook /></Link>
              <Link href="https://twitter.com" isExternal p={2}><FaTwitter /></Link>
              <Link href="https://instagram.com" isExternal p={2}><FaInstagram /></Link>
            </Flex>
            <Flex>
              <Link href="/terms" p={2}>Terms of Service</Link>
              <Link href="/privacy" p={2}>Privacy Policy</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
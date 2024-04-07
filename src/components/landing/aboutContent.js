import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Icon,
  VStack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillPeopleFill } from 'react-icons/bs';

const AboutContent = () => {
  const bg = useColorModeValue('teal.50', 'teal.900');

  return (
    <Box bg={bg} minHeight="100vh" position="relative">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={5} textAlign="center" mb={10}>
          <Heading color="teal" size="2xl">
            About Ideal Lab Dashboard
          </Heading>
          <Text fontSize="xl" color="teal.200">
            A platform where research meets innovation. Manage projects and
            gather global data efficiently.
          </Text>
        </VStack>

        {/* Project Overview */}
        <Box bg="teal" borderRadius="lg" p={5} mb={10}>
          <Heading size="lg" mb={4} color={'teal.100'}>
            Our Mission
          </Heading>
          <Text color={'teal.100'}>
            Dedicated to advancing privacy research, the Ideal Lab Dashboard
            enables our team to harness data from various platforms such as
            Facebook, Google, and TikTok. Based in Paris-Saclay, France, our
            work focuses on the intricacies of user privacy in daily habits.
          </Text>
        </Box>

        <Flex direction="column" align="center" justify="center">
          <Box
            width={{ base: '100%', md: '80%', lg: '60%' }}
            textAlign="center"
          >
            <Icon as={BsFillPeopleFill} w={10} h={10} color="teal.300" />
            <Heading size="md" my={2} color={'teal'}>
              Meet the Team
            </Heading>
            <Text color="teal.200">
              Composed of 7 dedicated researchers and led by Grazia Cecere, we
              are united in our passion for privacy and data research.
            </Text>
          </Box>
          {/* Additional content or team members can be added here within their own Box components, following the same width pattern. */}
        </Flex>

        {/* Call to Action */}
        <Flex justifyContent="center" mt={10}>
          <Button as="a" colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </Flex>

        <Box textAlign="center" py={5}>
          <Text fontSize="md" color="teal.300">
            Website created by{' '}
            <Text as="span" fontWeight="bold">
              Brice Toffolon
            </Text>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutContent;

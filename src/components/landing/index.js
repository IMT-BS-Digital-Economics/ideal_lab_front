import {
    Box,
    VStack,
    Heading,
    Text,
    useColorModeValue,
    Button,
    Stack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { SunIcon } from '@chakra-ui/icons';
import AnimatedParticles from './AnimatedParticles';
import hookUserMe from '../../hooks/user/hookUserMe';
import { useState } from 'react'; // Assuming this is a custom component

const LandingPage = () => {
    const [userData, setUserData] = useState(false);

    hookUserMe({ userData, setUserData });

    const bg = useColorModeValue('teal.50', 'teal.900');

    return (
        <>
            <Box bg={bg} minHeight="100vh" position="relative">
                <AnimatedParticles />
                <VStack
                    spacing={8}
                    justify="center"
                    align="center"
                    minHeight="100vh"
                >
                    <Heading
                        size="4xl"
                        fontWeight="bold"
                        color="teal.600"
                        textAlign="center"
                    >
                        <Text as="span" color="teal.400">
                            Ideal Lab
                        </Text>{' '}
                        Dashboard
                    </Heading>

                    {userData && (
                        <Stack
                            spacing={10}
                            direction={{ base: 'column', xl: 'row' }}
                        >
                            <ServiceBox
                                name="Projects"
                                description="Monitor your project"
                                path="/projects"
                            />
                            <ServiceBox
                                name="Repositories"
                                description="Manage repositories to use"
                                path="/repositories"
                            />
                        </Stack>
                    )}

                    <NextLink href="/about" passHref>
                        <Button
                            size="lg"
                            colorScheme="teal"
                            variant="solid"
                            shadow="md"
                            _hover={{ shadow: 'lg' }}
                        >
                            Learn More
                        </Button>
                    </NextLink>
                </VStack>
            </Box>
        </>
    );
};

const ServiceBox = ({ name, description, path }) => {
    const bg = useColorModeValue('teal.100', 'teal.700');
    const hoverBg = useColorModeValue('teal.200', 'teal.600');

    return (
        <NextLink href={path} passHref>
            <Box
                as="button"
                borderRadius="lg"
                bg={bg}
                padding="6"
                shadow="md"
                _hover={{ bg: hoverBg }}
                width="full"
                textAlign="center"
            >
                <SunIcon color="teal.500" w={8} h={8} mb={4} />
                <Heading size="md" color="teal.600">
                    {name}
                </Heading>
                <Text fontWeight="bold" color="gray.600">
                    {description}
                </Text>
            </Box>
        </NextLink>
    );
};

export default LandingPage;

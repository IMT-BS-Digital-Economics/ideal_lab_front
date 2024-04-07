import {
    Flex,
    Box,
    Container,
    Stack,
    Text,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaCube } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    const bgColor = useColorModeValue('teal', 'teal.800'); // Adjust for dark mode if necessary
    const textColor = useColorModeValue('white', 'gray.200');

    return (
        <Box bg={bgColor} color={textColor} width="full">
            <Container
                as={Stack}
                maxW={'6xl'}
                py={5}
                spacing={4}
                justify={'center'}
                align={'center'}
            >
                <Flex
                    direction={{ base: 'column', xl: 'row' }}
                    gap={3}
                    align={'center'}
                >
                    <Text as="b" fontSize="sm" align={'center'}>
                        © {new Date().getFullYear()} Ideal Lab Dashboard. All
                        rights reserved. Made by Brice Toffolon
                    </Text>
                    <FaHeart />
                </Flex>
                <Stack direction={'row'} spacing={6}>
                    <NextLink href="/" passHref>
                        <Button
                            leftIcon={<FaCube />}
                            variant={'ghost'}
                            size={'sm'}
                            _hover={{ bg: 'teal.300', color: 'teal' }}
                        >
                            <Text>
                                <Text as={'span'} color={'teal.100'}>
                                    Ideal Lab
                                </Text>{' '}
                                Dashboard
                            </Text>
                        </Button>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Button
                            size="sm"
                            variant={'ghost'}
                            _hover={{ bg: 'teal.700', color: 'white' }}
                        >
                            About
                        </Button>
                    </NextLink>
                    <Button
                        size="sm"
                        variant={'ghost'}
                        _hover={{ bg: 'teal.700', color: 'white' }}
                    >
                        Contact
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;

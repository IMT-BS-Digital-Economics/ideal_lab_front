import { useState } from 'react';

import {
    Button,
    ButtonGroup,
    Flex,
    Spacer,
    Text,
    Icon,
    IconButton,
    useDisclosure,
    Collapse,
} from '@chakra-ui/react';

import { FaCube } from 'react-icons/fa6';

import NextLink from 'next/link';

import { IoInformation, IoArrowForward } from 'react-icons/io5';

import ProfileMenu from './profileMenu';

import { useApiCallDataResp } from '../../hooks/callApi';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
    const [userData, setUserData] = useState(false);

    const { isOpen, onToggle } = useDisclosure();

    useApiCallDataResp('get', '/user/me', '', userData, setUserData);

    const navBarButtons = (
        <>
            {userData.data && userData.data.username ? (
                <ProfileMenu username={userData.data.username} />
            ) : (
                <NextLink href={'/login'} passHref>
                    <Button
                        rightIcon={<IoArrowForward />}
                        variant="ghost"
                        colorScheme={'teal'}
                    >
                        Login
                    </Button>
                </NextLink>
            )}
            <NextLink href={'/about'} passHref>
                <Button
                    variant="ghost"
                    leftIcon={<Icon as={IoInformation} color={'teal'} />}
                >
                    About
                </Button>
            </NextLink>
        </>
    );

    return (
        <div>
            <Flex
                alignItems={'center'}
                w={'100vw'}
                marginTop={0}
                marginLeft={0}
                padding={'0.5%'}
            >
                <NextLink href="/" passHref>
                    <Button
                        leftIcon={<FaCube />}
                        colorScheme={'teal'}
                        variant={'ghost'}
                    >
                        <Text>
                            <Text as={'span'} color={'teal.100'}>
                                Ideal Lab
                            </Text>{' '}
                            Dashboard
                        </Text>
                    </Button>
                </NextLink>
                <Spacer />
                <ButtonGroup display={{ base: 'none', xl: 'flex' }}>
                    {navBarButtons}
                </ButtonGroup>
                <Flex
                    display={{
                        base: 'flex',
                        xl: 'none',
                    }}
                    mb="1%"
                >
                    <IconButton
                        aria-label="Open menu"
                        size="lg"
                        mr="2"
                        mt={2}
                        icon={
                            !isOpen ? <Icon as={FiMenu} /> : <Icon as={FiX} />
                        }
                        onClick={onToggle}
                    />
                </Flex>
            </Flex>
            <Collapse in={isOpen} unmountOnExit>
                <Flex
                    bg="white.200"
                    padding="2%"
                    mt="1%"
                    boxShadow="outline"
                    direction="column"
                    alignItems="center"
                >
                    {navBarButtons}
                </Flex>
            </Collapse>
        </div>
    );
};

export default NavBar;

import { useState, useEffect } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import FormData from 'form-data';

import {
    Center,
    InputGroup,
    FormLabel,
    Input,
    InputRightElement,
    Button,
    Fade,
    FormControl,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';

import hookSignIn from '../../hooks/auth/hookSignIn';

import { useApiCallDataResp } from '../../hooks/callApi';

const UserLogin = () => {
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [show, setShow] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [, setResponseSuccess] = useState(false);
    const noRedirect = useState(false);

    const [userData, setUserData] = useState(false);

    const router = useRouter();

    useApiCallDataResp('get', '/user/me', '', userData, setUserData);
    
    useEffect(() => {
        const checkVerification = () => {
            if (userData && userData.data) {
                router.push('/');
            }
        };
  
      checkVerification();
    }, [userData]);

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleClick = () => {
        setShow(!show);
    };

    const isError = (value) => {
        return value === '';
    };

    const isValidForm = () => !isError(nameInput) && !isError(passwordInput);

    const data = new FormData();
    data.append('username', nameInput);
    data.append('password', passwordInput);

    hookSignIn({
        data,
        isSubmit,
        setIsSubmit,
        setResponseSuccess,
        noRedirect,
    });

    const bg = useColorModeValue('teal.50', 'teal.900');

    return (
        <Flex flex="1" align={'center'} justify={'center'} bg={bg}>
            <FormControl isRequired>
                <Center>
                    <Flex
                        gap={6}
                        direction={'column'}
                        w={{ base: '75%', xl: '30%' }}
                    >
                        <InputGroup
                            variant={'filled'}
                            size={'lg'}
                            flexDirection={'column'}
                        >
                            <FormLabel>Username</FormLabel>
                            <Input
                                placeholder={'Username'}
                                value={nameInput}
                                onChange={(e) =>
                                    handleInputChange(e, setNameInput)
                                }
                                shadow={'md'}
                            />
                        </InputGroup>
                        <InputGroup
                            variant={'filled'}
                            size={'lg'}
                            flexDirection={'column'}
                        >
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    placeholder={'Password'}
                                    type={show ? 'text' : 'password'}
                                    value={passwordInput}
                                    onChange={(e) =>
                                        handleInputChange(e, setPasswordInput)
                                    }
                                    shadow={'md'}
                                />
                                <InputRightElement>
                                    <Button
                                        colorScheme={'teal'}
                                        onClick={handleClick}
                                    >
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <NextLink href={'/user/reset'} passHref>
                                <Button
                                    variant={'ghost'}
                                    colorScheme={'teal'}
                                    size="sm"
                                    marginTop={'2%'}
                                >
                                    Forgot your password ?
                                </Button>
                            </NextLink>
                        </InputGroup>
                        <Fade in={isValidForm()}>
                            <Button
                                colorScheme={'teal'}
                                size={'lg'}
                                w={'100%'}
                                isLoading={isSubmit}
                                loadingText={'Login in...'}
                                onClick={() => setIsSubmit(true)}
                                shadow={'md'}
                            >
                                Login
                            </Button>
                        </Fade>
                    </Flex>
                </Center>
            </FormControl>
        </Flex>
    );
};

export default UserLogin;

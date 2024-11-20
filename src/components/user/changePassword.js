import { useState, useEffect } from 'react';

import NextLink from 'next/link';

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
    Heading,
    Text,
} from '@chakra-ui/react';
import { useApiCallToastResp } from '../../hooks/callApi';

const ChangePassword = ({token}) => {
    const bg = useColorModeValue('teal.50', 'teal.900');
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [ confirmPass, setConfirmPass ] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const isError = (value) => {
        return value === '';
    };

    const isValidForm = () => !isError(passwordInput) && !isError(confirmPass);

    const data = new FormData();
    data.append('password', passwordInput);
    data.append('confirm_password', confirmPass);

    useApiCallToastResp('post', `/user/reset_password/${token}`, {password: passwordInput, confirm_password: confirmPass}, isSubmit, setIsSubmit);
    
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
                        </InputGroup>
                        <InputGroup
                            variant={'filled'}
                            size={'lg'}
                            flexDirection={'column'}
                        >
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <Input
                                    placeholder={'Password'}
                                    type={show ? 'text' : 'password'}
                                    value={confirmPass}
                                    onChange={(e) =>
                                        handleInputChange(e, setConfirmPass)
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
                        </InputGroup>
                        <Fade in={isValidForm()}>
                            <Button
                                colorScheme={'teal'}
                                size={'lg'}
                                w={'100%'}
                                isLoading={isSubmit}
                                loadingText={'Wait...'}
                                onClick={() => setIsSubmit(true)}
                                shadow={'md'}
                            >
                                Change Password
                            </Button>
                        </Fade>
                    </Flex>
                </Center>
            </FormControl>
        </Flex>
    );
};

export default ChangePassword;

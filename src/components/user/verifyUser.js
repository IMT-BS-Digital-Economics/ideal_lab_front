import { useState, useEffect } from 'react';

import NextLink from 'next/link';

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
} from '@chakra-ui/react';
import { useApiCallDataResp, useApiCallToastResp } from '../../hooks/callApi';

const VerifyUser = ({token}) => {
    const bg = useColorModeValue('teal.50', 'teal.900');

    const [ response, setResponse ] = useState(false);

    const [ userData, setUserData ] = useState(false);

    useApiCallDataResp('get', '/user/me', '', userData, setUserData);

    useApiCallDataResp('get', `user/verified/${token}`, '', token ? response : true, setResponse);
    
    return (
        <Flex flex="1" align={'center'} justify={'center'} bg={bg} direction="column" gap="1%">
           <Heading color="teal.500">
                {
                    response.data && response.data.message ? (
                        response.data.message
                    ) : null
                }
                {
                    response && response.response && response.response.data.detail ? (
                        response.response.data.detail
                    ) : null
                }
           </Heading>
           {
                userData && userData.data && response.data ? (
                    <NextLink href="/login" passhref>
                        <Button>
                            Login
                        </Button>
                    </NextLink>
                ) : (
                    null
                )
           }
        </Flex>
    );
};

export default VerifyUser;

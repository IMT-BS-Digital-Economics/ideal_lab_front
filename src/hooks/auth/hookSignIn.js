import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useToast } from '@chakra-ui/react';

import axios from 'axios';

const hookSignIn = ({ data, isSubmit, setIsSubmit }) => {
    const toast = useToast();

    const router = useRouter();

    useEffect(() => {
        async function signIn() {
            return axios({
                method: 'post',
                url: `api/auth/signin`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                withCredentials: true,
                data: data,
            });
        }
        if (isSubmit) {
            signIn()
                .then((response) => {
                    toast({
                        title: response.data.detail,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                    router.push('/');
                })
                .catch((error) => {
                    toast({
                        title: 'Error',
                        description:
                            error.response &&
                            error.response.data &&
                            error.response.data.detail
                                ? error.response.data.detail
                                : 'Internal Server Error',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                    setIsSubmit(false);
                });
        }
    });
};

export default hookSignIn;

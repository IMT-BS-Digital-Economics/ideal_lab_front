import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useToast } from '@chakra-ui/react';

import instance from '../instance';

const hookSignIn = ({ data, isSubmit, setIsSubmit }) => {
    const toast = useToast();

    const router = useRouter();

    useEffect(() => {
        async function signIn() {
            return instance.post('auth/signin', data, {"headers": {'Content-Type': 'application/x-www-form-urlencoded'}});
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
                    console.log(error);
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

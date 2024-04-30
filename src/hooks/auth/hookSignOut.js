import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useToast } from '@chakra-ui/react';

import axios from 'axios';

const hookSignOut = ({ isSubmit, setIsSubmit }) => {
    const toast = useToast();

    const router = useRouter();

    return useEffect(() => {
        async function signOutUser() {
            return axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_HOST}/auth/signout`,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
        }

        if (isSubmit) {
            signOutUser().then((response) => {
                toast({
                    title: response.data.detail,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
                router.push('/').then(() => {
                    router.reload();
                });
            });
            setIsSubmit(false);
        }
    });
};

export default hookSignOut;

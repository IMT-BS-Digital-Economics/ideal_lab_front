import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useToast } from '@chakra-ui/react';

import instance from '../instance';

const hookSignOut = ({ isSubmit, setIsSubmit }) => {
    const toast = useToast();

    const router = useRouter();

    return useEffect(() => {
        async function signOutUser() {
            return instance.post('/auth/signout');
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

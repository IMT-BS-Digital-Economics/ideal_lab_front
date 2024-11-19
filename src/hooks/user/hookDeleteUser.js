import { useRouter } from 'next/router';

import { useToast } from '@chakra-ui/react';

import instance from '../instance';

const hookDeleteUser = ({ isDelete }) => {
    const router = useRouter();

    const toast = useToast();

    async function deleteUser() {
        return instance.delete('/user');
    }

    if (isDelete) {
        deleteUser().then(() => {
            router.push('/');
            toast({
                title: 'Account deleted !',
                description: "You're account has been deleted",
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
        });
    }
};

export default hookDeleteUser;

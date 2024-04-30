import { useEffect } from 'react';

import { useToast } from '@chakra-ui/react';

import axios from 'axios';

const hookDelUser = ({ userEmailDel, setUserEmailDel }) => {
    const toast = useToast();

    useEffect(() => {
        async function delUser() {
            return axios({
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },
                url: `${process.env.NEXT_PUBLIC_HOST}/admin/user`,
                data: JSON.stringify({
                    email: userEmailDel,
                }),
                withCredentials: true,
            });
        }

        if (userEmailDel) {
            delUser()
                .then((response) => {
                    toast({
                        title: response.data.detail,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            setUserEmailDel(false);
        }
    });
};

export default hookDelUser;

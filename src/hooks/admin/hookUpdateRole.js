import { useEffect } from 'react';

import { useToast } from '@chakra-ui/react';

import axios from 'axios';

const hookUpdateRole = ({ userName, setUserName, newRole, setNewRole }) => {
    const toast = useToast();

    useEffect(() => {
        async function updateUserRole() {
            return axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                url: `api/admin/update_role`,
                data: JSON.stringify({
                    username: userName,
                    role: newRole,
                }),
                withCredentials: true,
            });
        }

        if (userName && newRole) {
            updateUserRole()
                .then((response) => {
                    toast({
                        title: response.data.detail,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    toast({
                        title: 'Error',
                        description: error.response.data.detail,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                });
            setNewRole(false);
            setUserName(false);
        }
    });
};

export default hookUpdateRole;

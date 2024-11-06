import { useEffect } from 'react';

import axios from 'axios';

import { useToast } from '@chakra-ui/react';

const hookForgotPassword = ({ isSubmit, setIsSubmit, email }) => {
    const toast = useToast();

    const options = {
        title: 'Your password will be reset',
        description:
            'To do so, you will receive an mail to reset your password',
        status: 'success',
        duration: 9000,
        isClosable: true,
    };

    useEffect(() => {
        async function forgotPassword() {
            return axios({
                method: 'post',
                url: `api/user/forgot_password`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    email: email,
                }),
            });
        }

        if (isSubmit) {
            forgotPassword()
                .then(() => {
                    toast(options);
                })
                .catch(() => {
                    toast(options);
                });
            setIsSubmit(false);
        }
    });
};

export default hookForgotPassword;

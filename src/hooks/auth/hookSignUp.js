import { useEffect } from 'react';

import FormData from 'form-data';

import axios from 'axios';

const hookSignUp = ({
    registerData,
    isSubmit,
    setIsSubmit,
    setResponseSuccess,
    toast,
}) => {
    const data = new FormData();

    const dataJson = JSON.parse(registerData);

    data.append('username', dataJson.username);
    data.append('password', dataJson.password);

    useEffect(() => {
        async function signUp() {
            return axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_HOST}/auth/signup`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: registerData,
            });
        }

        async function signIn() {
            return axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_HOST}/auth/signin`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                withCredentials: true,
                data: data,
            });
        }

        if (isSubmit) {
            signUp()
                .then((response) => {
                    toast({
                        title: 'Account created !',
                        description: response.data.detail,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                    signIn()
                        .then(() => {
                            setResponseSuccess(true);
                        })
                        .catch((error) => {
                            console.log(error);
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
            setIsSubmit(false);
        }
    });
};

export default hookSignUp;

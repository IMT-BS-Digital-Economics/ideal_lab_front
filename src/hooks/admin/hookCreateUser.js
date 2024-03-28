import { useEffect } from "react";

import { useToast } from "@chakra-ui/react";

import axios from "axios";

const hookCreateUser = ({userEmail, userName, passWord, isSubmit, setIsSubmit}) => {
    const toast = useToast();

    useEffect(() => {
        async function addUser() {
            return axios({
                method:'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${process.env.NEXT_PUBLIC_HOST}/admin/create_user`,
                data: JSON.stringify({
                    "email": userEmail,
                    "username": userName,
                    "password": passWord,
                }),
                withCredentials: true
            });
        }

        if (isSubmit) {
            addUser().then((response) => {
                toast({
                    title: response.data.detail,
                    status: "success",
                    duration: 9000,
                    isClosable: true
                });
            }).catch(error => {
                toast({
                    title: "Error",
                    description: error.response.data.detail,
                    status: "error",
                    duration: 9000,
                    isClosable: true
                });
            })
        }
        setIsSubmit(false);
    });
}

export default hookCreateUser;
import {useEffect} from "react";

import {useRouter} from "next/router";

import axios from "axios";

const hookVerified = ({isVerified, setIsVerified, toast}) => {
    const router = useRouter();

    useEffect(() => {
        async function verified() {
            return axios({
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_HOST}/user/me`,
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
        }

        if (isVerified) {
            verified().then((response) => {
                toast({
                    title: "Account verified !",
                    description: `Welcome ${response.data.username}`,
                    status: "success",
                    duration: 9000,
                    isClosable: true
                });
                router.push('/');
            }).catch(() => {
                toast({
                    title: "Account not verified !",
                    description: `You must verified your account`,
                    status: "error",
                    duration: 9000,
                    isClosable: true
                })
            });
            setIsVerified(false);
        }
    })
}

export default hookVerified;
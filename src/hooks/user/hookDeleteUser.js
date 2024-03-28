import { useRouter } from "next/router";

import {useToast} from "@chakra-ui/react";

import axios from "axios";

const hookDeleteUser = ({isDelete}) => {
    const router = useRouter();

    const toast = useToast()

    async function deleteUser() {
        return axios({
            method: 'delete',
            url: `${process.env.NEXT_PUBLIC_HOST}/user`,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
    }

    if (isDelete) {
        deleteUser().then(() => {
            router.push('/')
            toast({
                title: "Account deleted !",
                description: "You're account has been deleted",
                status: "success",
                duration: 9000,
                isClosable: true
            })
        });
    }
}

export default hookDeleteUser;
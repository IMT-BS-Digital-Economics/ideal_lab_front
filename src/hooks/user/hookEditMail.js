import { useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const hookEditMail = ({isEdit, setIsEdit, newEmail, setNewEmail}) => {
    const toast = useToast();

    useEffect(() => {
        async function editMail() {
            return axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_HOST}/user/reset_email`,
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
                data: JSON.stringify({"email": newEmail})
            });
        }

        if (isEdit) {
            editMail().then(() => {
                toast({
                    title: "Email changed with success",
                    status: 'success',
                    duration: 9000,
                    isClosable: true
                });
            }).catch(error => {
                toast({
                    title: error.response.data.detail,
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                });
            });
            setIsEdit(false);
            setNewEmail('');
        }
    })
}

export default hookEditMail;
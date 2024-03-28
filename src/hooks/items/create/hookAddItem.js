import { useEffect } from "react";

import axios from "axios";

import { useToast } from "@chakra-ui/react";

const hookAddItem = ({title, description, hour, minutes, executable, isSubmit, setIsSubmit, onClose, resetVal, args}) => {
    const toast = useToast();

    useEffect(() => {
        async function addItem() {
            return axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${process.env.NEXT_PUBLIC_HOST}/items/add`,
                withCredentials: true,
                data: JSON.stringify({
                    "title": title,
                    "description": description,
                    "path": executable,
                    "time_to_start": `${hour}:${minutes}`,
                    "arguments": args
                })
            });
        }

        if (isSubmit) {
            addItem().then((response) => {
                toast({
                    title: response.data.detail,
                    status: "success",
                    duration: 9000,
                    isClosable: true
                });
                onClose();
            }).catch(error => {
                toast({
                    title: 'Something wrong happened',
                    description: error.response.data.detail,
                    status: "error",
                    duration: 9000,
                    isClosable: true
                });
            });
            resetVal();
            setIsSubmit(false);
        }
    });
}

export default hookAddItem;
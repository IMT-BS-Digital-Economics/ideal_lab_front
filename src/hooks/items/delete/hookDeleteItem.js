import { useEffect } from 'react';

import { useToast } from '@chakra-ui/react';

import axios from 'axios';

const hookDeleteItem = (
    currentId,
    itemId,
    setItemId,
    isSubmit,
    setIsSubmit
) => {
    const toast = useToast();

    useEffect(() => {
        async function deleteItem() {
            return axios({
                method: 'delete',
                url: `${process.env.NEXT_PUBLIC_HOST}/items/${itemId}`,
                withCredentials: true,
            });
        }

        if (isSubmit) {
            deleteItem()
                .then((response) => {
                    toast({
                        title: response.data.details,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });

                    if (itemId && currentId === itemId) {
                        setItemId('Home');
                    }
                })
                .catch((error) => {
                    toast({
                        title: 'An error occured !',
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

export default hookDeleteItem;

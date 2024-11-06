import { useEffect } from 'react';

import axios from 'axios';

import { useToast } from '@chakra-ui/react';

const hookItemStatus = (isSubmit, setIsSubmit, itemId, newStatus) => {
    const toast = useToast();

    useEffect(() => {
        async function updateItemStatus() {
            return axios({
                method: 'post',
                url: `api/items/${itemId}/status/${newStatus}`,
                withCredentials: true,
            });
        }

        if (isSubmit && itemId) {
            updateItemStatus()
                .then((response) => {
                    toast({
                        title: response.data,
                        description: `${itemId} status has been updated to ${newStatus}`,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    toast({
                        title: error.response.data.detail,
                        description: `${itemId} status hasn't been updated to ${newStatus}`,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                });
            setIsSubmit(false);
        }
    });
};

export default hookItemStatus;

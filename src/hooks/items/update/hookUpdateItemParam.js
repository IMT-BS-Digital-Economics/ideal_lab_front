import { useEffect } from 'react';

import { useToast } from '@chakra-ui/react';

import axios from 'axios';

const hookUpdateItemParam = (
    itemTitle,
    itemId,
    itemParam,
    newValue,
    isSubmit,
    setIsSubmit
) => {
    const toast = useToast();

    useEffect(() => {
        async function updateItemParam() {
            return axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_HOST}/items/${itemId}/edit/${itemParam}`,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                data: JSON.stringify({ [itemParam]: newValue }),
            });
        }

        if (isSubmit) {
            if (newValue && itemId) {
                updateItemParam()
                    .then(() => {
                        toast({
                            title: `Item ${itemParam} has been updated`,
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                        });
                    })
                    .catch((error) => {
                        toast({
                            title: 'An error has occured !',
                            description: error.response.data.detail,
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        });
                    });
            }
            setIsSubmit(false);
        }
    });
};

export default hookUpdateItemParam;

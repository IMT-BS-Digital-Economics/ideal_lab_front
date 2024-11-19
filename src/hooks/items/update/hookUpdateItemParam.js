import { useEffect } from 'react';

import { useToast } from '@chakra-ui/react';

import instance from '../../instance';

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
            return instance.post(`api/items/${itemId}/edit/${itemParam}`, {data: { [itemParam]: newValue }});
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
                        console.log(error);
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

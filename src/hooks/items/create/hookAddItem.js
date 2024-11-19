import { useEffect } from 'react';

import instance from '../../instance';

import { useToast } from '@chakra-ui/react';

const hookAddItem = ({
    title,
    description,
    hour,
    minutes,
    executable,
    isSubmit,
    setIsSubmit,
    onClose,
    resetVal,
    args,
}) => {
    const toast = useToast();

    useEffect(() => {
        async function addItem() {
            return instance.post('/items/add', {data: { title: title, description: description, path: executable, time_to_start: `${hour}:${minutes}`, arguments: args }});
        }

        if (isSubmit) {
            addItem()
                .then((response) => {
                    toast({
                        title: response.data.detail,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                    onClose();
                })
                .catch((error) => {
                    console.log(error)
                    toast({
                        title: 'Check console logs',
                        description: error.response.data.detail,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                });
            resetVal();
            setIsSubmit(false);
        }
    });
};

export default hookAddItem;

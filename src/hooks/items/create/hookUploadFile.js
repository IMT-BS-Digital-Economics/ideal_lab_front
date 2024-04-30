import { useEffect } from 'react';

import FormData from 'form-data';

import axios from 'axios';

import { useToast } from '@chakra-ui/react';

const hookUploadFile = (itemId, file, setFile, path = '.') => {
    const data = new FormData();

    const toast = useToast();

    useEffect(() => {
        async function UploadFile() {
            return axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_HOST}/projects/${itemId}/upload`,
                withCredentials: true,
                data: data,
            });
        }

        if (file) {
            data.append('file', file);
            data.append('path', path);
            UploadFile()
                .then((response) => {
                    toast({
                        title: `${response.data.filename} has been upload`,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    toast({
                        title: 'An error occured',
                        description: error.response.data.detail,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                });
            setFile(null);
        }
    });
};

export default hookUploadFile;

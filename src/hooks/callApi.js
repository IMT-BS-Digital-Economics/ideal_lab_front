import { useEffect, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

import instance from '../hooks/instance';
import useResponsiveValue from '../hooks/useResponsiveValue';

async function callApi(method, endpoint, data) {
    if (method === 'post') return instance.post(endpoint, data);
    if (method === 'get') return instance.get(endpoint);
    if (method === 'delete') return instance.delete(endpoint);

    return undefined;
}

export function useApiCallToastResp(
    method,
    endpoint,
    data, // eslint-disable-line
    isSubmit,
    setIsSubmit
) {
    const toast = useToast();

    console.log(isSubmit)

    const toastPosition = useResponsiveValue({ defaultValue: 'top', base: 'top', xl: 'bottom' });

    useEffect(() => {
    if (isSubmit) {
        callApi(method, endpoint, data)
            .then((response) => {
                toast({
                    position: toastPosition,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    title:
                        response && response.data && response.data.message
                            ? response.data.message
                            : null,
                });
            })
            .catch((error) => {
                toast({
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    title: 'Error',
                    description:
                        error.response && error.response.data && error.response.data.message
                            ? error.response.data.message
                            : 'An error occured',
                });
            });
        setIsSubmit(false);
    }
}, [isSubmit]);
}

export function useApiCallDataResp(
    method,
    endpoint,
    data, // eslint-disable-line
    response, // eslint-disable-line
    setResponse // eslint-disable-line
) {
    useEffect(() => {
        if (!response) {
            callApi(method, endpoint, data)
                .then((reqResponse) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    setResponse(reqResponse);
                })
                .catch((error) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    setResponse(error);
                });
        }
    });
}

export function useApiCallDataRespDelay(
    method,
    endpoint,
    data, // eslint-disable-line
    response, // eslint-disable-line
    setResponse, // eslint-disable-line
    delay
) {
    const fetchApi = useCallback(() => {
        callApi(method, endpoint, data)
            .then((reqResponse) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                setResponse(reqResponse);
            })
            .catch(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                setResponse('error');
            });
    }, [method, endpoint, data]);

    useEffect(() => {
        if (!response)
            fetchApi()

        const intervalId = setInterval(fetchApi, delay);

        return () => clearInterval(intervalId); // Clean up on unmount
    }, [fetchApi]);
}
import { useEffect, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

import instance from '../hooks/instance';
import useResponsiveValue from '../hooks/useResponsiveValue';

async function callApi(method, endpoint, data = {}) {
    if (method === 'post') return instance.post(endpoint, data);
    if (method === 'get') return instance.get(endpoint, data);
    if (method === 'delete') return instance.delete(endpoint, data);

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

    const toastPosition = useResponsiveValue({
        defaultValue: 'top',
        base: 'top',
        xl: 'bottom',
    });

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
                                : 'Operation done',
                    });
                })
                .catch((error) => {
                    console.log(error);
                    toast({
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        title: 'Error',
                        description:
                            error.response &&
                            error.response.data &&
                            error.response.data.detail
                                ? error.response.data.detail
                                : 'Check console logs',
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
                    setResponse(reqResponse);
                })
                .catch((error) => {
                    console.log(error)
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
                setResponse(reqResponse);
            })
            .catch((error) => {
                setResponse('error');
                console.log(error)
            });
    }, [method, endpoint, data]);

    useEffect(() => {
        if (!response) fetchApi();

        const intervalId = setInterval(fetchApi, delay);

        return () => clearInterval(intervalId); // Clean up on unmount
    }, [fetchApi]);
}

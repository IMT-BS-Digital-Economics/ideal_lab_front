import { useState } from 'react';

import axios from 'axios';

import { useInterval } from '@chakra-ui/react';

const hookGetOutput = (
    itemId,
    itemStatus,
    setOutput,
    outputType,
    isSubmit,
    setIsSubmit
) => {
    const [delay, setDelay] = useState(0);

    useInterval(() => {
        async function getOuput() {
            return axios({
                method: 'get',
                url: `api/items/${itemId}/${outputType}`,
                withCredentials: true,
            });
        }

        if (
            outputType === 'err_output' &&
            itemStatus !== 'off' &&
            itemStatus !== 'paused'
        ) {
            setIsSubmit(true);
        }

        if (isSubmit) {
            setDelay(1000);
            getOuput()
                .then((response) => {
                    setOutput(response.data);
                })
                .catch((error) => {
                    setOutput(error.response.data.detail);
                    setIsSubmit(false);
                    setDelay(0);
                });
        }
    }, delay);
};

export default hookGetOutput;

import { useState } from 'react';

import { useInterval } from '@chakra-ui/react';
import instance from '../../instance';

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
            return instance.get(`/items/${itemId}/${outputType}`);
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
                    console.log(error);
                    setOutput(error.response.data.detail);
                    setIsSubmit(false);
                    setDelay(0);
                });
        }
    }, delay);
};

export default hookGetOutput;

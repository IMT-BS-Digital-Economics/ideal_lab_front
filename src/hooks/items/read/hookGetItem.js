import { useState } from 'react';

import instance from '../../instance';

import { useInterval } from '@chakra-ui/react';

const hookGetItem = (setItem, itemId) => {
    const [delay, setDelay] = useState(0);

    useInterval(() => {
        async function getItem() {
            return instance.get(`/items/${itemId}`);
        }

        if (itemId) {
            getItem()
                .then((response) => {
                    setItem(response.data);
                    setDelay(1000);
                })
                .catch(() => {
                    setItem('not found');
                });
        }
    }, delay);
};

export default hookGetItem;

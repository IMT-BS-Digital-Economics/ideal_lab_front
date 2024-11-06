import { useState } from 'react';

import axios from 'axios';
import { useInterval } from '@chakra-ui/react';

const hookGetItem = (setItem, itemId) => {
    const [delay, setDelay] = useState(0);

    useInterval(() => {
        async function getItem() {
            return axios({
                method: 'get',
                url: `api/items/${itemId}`,
                withCredentials: true,
            });
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

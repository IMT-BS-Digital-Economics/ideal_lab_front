import { useState } from 'react';

import instance from '../../instance';

import { useInterval } from '@chakra-ui/react';

async function getItemsList() {
    return instance.get(`/items/list`);
}

const hookGetItemsList = ({ setItemsList }) => {
    const [delay, setDelay] = useState(0);

    useInterval(() => {
        getItemsList().then((response) => {
            if (response.data.length === 0) {
                setItemsList(null);
            } else {
                setItemsList(response.data.list);
                setDelay(3000);
            }
        });
    }, delay);
};

export default hookGetItemsList;

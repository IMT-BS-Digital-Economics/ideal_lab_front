import { useState } from "react";

import axios from "axios";

import { useInterval } from "@chakra-ui/react";

async function getItemsList() {
    return axios({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_HOST}/items/list`,
        withCredentials: true,
    });
}

const hookGetItemsList = ({setItemsList}) => {
    const [delay, setDelay] = useState(0);

    useInterval(
        () => {
            getItemsList().then((response) => {
                if (response.data.length === 0) {
                    setItemsList(null)
                }
                else {
                    setItemsList(response.data.list)
                    setDelay(3000);
                }
            })
        },
        delay
    );
}

export default hookGetItemsList;
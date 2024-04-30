import { useState, useEffect } from 'react';

import axios from 'axios';

const hookCollectExecutableList = ({
    executableList,
    setExecutableList,
    collect,
}) => {
    const [collectCpy, setCollectCpy] = useState(null);

    useEffect(() => {
        async function getExecutableList() {
            return axios({
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_HOST}/project/${collect}`,
                withCredentials: true,
            });
        }

        if (!collectCpy && collect) {
            setCollectCpy(collectCpy);
        }

        if (
            (executableList.length === 0 && collect) ||
            (collectCpy !== collect && collect)
        ) {
            getExecutableList().then((response) => {
                setExecutableList(response.data);
            });
            setCollectCpy(collect);
        }
    });
};

export default hookCollectExecutableList;

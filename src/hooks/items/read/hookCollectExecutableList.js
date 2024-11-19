import { useState, useEffect } from 'react';

import instance from '../../instance';

const hookCollectExecutableList = ({
    executableList,
    setExecutableList,
    collect,
}) => {
    const [collectCpy, setCollectCpy] = useState(null);

    useEffect(() => {
        async function getExecutableList() {
            return instance.get(`/project/${collect}`);
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

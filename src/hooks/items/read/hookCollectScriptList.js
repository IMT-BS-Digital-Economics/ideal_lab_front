import { useEffect } from 'react';

import instance from '../../instance';

const hookCollectScriptList = ({ collectList, setCollectList }) => {
    useEffect(() => {
        async function getCollectScriptList() {
            return instance.get('/project/');
        }

        if (collectList.length === 0) {
            getCollectScriptList().then((response) => {
                setCollectList(response.data);
            });
        }
    });
};

export default hookCollectScriptList;

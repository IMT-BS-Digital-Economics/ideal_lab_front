import { useEffect } from 'react';

import axios from 'axios';

const hookCollectScriptList = ({ collectList, setCollectList }) => {
    useEffect(() => {
        async function getCollectScriptList() {
            return axios({
                method: 'get',
                url: `api/project/`,
                withCredentials: true,
            });
        }

        if (collectList.length === 0) {
            getCollectScriptList().then((response) => {
                setCollectList(response.data);
            });
        }
    });
};

export default hookCollectScriptList;

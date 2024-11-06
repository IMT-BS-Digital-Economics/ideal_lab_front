import { useEffect } from 'react';

import axios from 'axios';

const hookGetRoles = ({ roles, setRoles }) => {
    useEffect(() => {
        async function getRoles() {
            return axios({
                method: 'get',
                url: `api/admin/roles`,
                withCredentials: true,
            });
        }

        if (!roles) {
            getRoles().then((response) => {
                setRoles(response.data);
            });
        }
    });
};

export default hookGetRoles;

import { useEffect } from 'react';

import axios from 'axios';

const hookGetAllUsers = ({ usersData, setUsersData }) => {
    useEffect(() => {
        async function getAllUsers() {
            return axios({
                method: 'get',
                url: `api/admin/users`,
                withCredentials: true,
            });
        }

        if (!usersData) {
            getAllUsers().then((response) => {
                setUsersData(response.data);
            });
        }
    });
};

export default hookGetAllUsers;

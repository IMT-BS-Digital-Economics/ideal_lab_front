import { useEffect } from 'react';

import axios from 'axios';

const hookGetAllUsers = ({ usersData, setUsersData }) => {
    useEffect(() => {
        async function getAllUsers() {
            return axios({
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_HOST}/admin/users`,
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

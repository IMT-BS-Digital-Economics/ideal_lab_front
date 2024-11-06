import { useEffect } from 'react';
import axios from 'axios';

const hookUserMe = ({ userData, setUserData }) => {
    useEffect(() => {
        async function isUser() {
            return axios({
                method: 'get',
                url: `api/user/me`,
                withCredentials: true,
            });
        }

        if (!userData) {
            isUser().then((response) => {
                setUserData(response.data);
            });
        }
    });
};

export default hookUserMe;

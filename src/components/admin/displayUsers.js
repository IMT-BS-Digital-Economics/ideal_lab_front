import { useState } from 'react';

import { Box, Stack } from '@chakra-ui/react';

import { useApiCallDataResp } from '../../hooks/callApi';
import UserCard from './userCard';

const DisplayUsers = () => {
    const [usersData, setUsersData] = useState(false);
    
    useApiCallDataResp('get', 'admin/users', '', usersData, setUsersData);

    return (
        <div>
            <Box
                m={'3%'}
                overflowY={'auto'}
                maxHeight={'48em'}
                ml={6}
                mt={6}
                h={'48em'}
            >
                <Stack direction={'column'} spacing={'6'}>
                    {usersData && usersData.data ? (
                        usersData.data.map((user) => {
                            return (
                                <>
                                    {user && user.id && user.username ? (
                                        <div key={user.id}>
                                            <UserCard user={user} />
                                        </div>
                                    ) : null}
                                </>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </Stack>
            </Box>
        </div>
    );
};

export default DisplayUsers;

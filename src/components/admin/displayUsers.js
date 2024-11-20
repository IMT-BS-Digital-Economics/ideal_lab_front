import { useState } from 'react';

import { Box, Stack, IconButton} from '@chakra-ui/react';

import { FaArrowsRotate } from 'react-icons/fa6';

import { useApiCallDataResp } from '../../hooks/callApi';
import UserCard from './userCard';

const DisplayUsers = () => {
    const [usersData, setUsersData] = useState(false);
    
    useApiCallDataResp('get', 'admin/users', '', usersData, setUsersData);

    return (
        <div>
                        <IconButton
                ml={6}
                colorScheme="teal"
                aria-label="Refresh"
                size="lg"
                icon={<FaArrowsRotate />}
                onClick={() => {
                    setUsersData(false);
                }}
            />
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

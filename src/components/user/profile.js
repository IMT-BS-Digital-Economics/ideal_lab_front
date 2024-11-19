import { useState } from 'react';

import { Heading, Stack, Center, Text } from '@chakra-ui/react';

import { FaUserCircle } from 'react-icons/fa';

import { useApiCallDataResp } from '../../hooks/callApi';

const Profile = () => {
    const [userData, setUserData] = useState(false);

    useApiCallDataResp('get', '/user/me', '', userData, setUserData);

    return (
        <div>
            <Center margin={'5%'}>
                <Stack spacing={'3%'}>
                    <FaUserCircle color={'teal'} size={'100%'} />
                    {userData && userData.data && userData.data.username ? (
                        <Heading align={'center'} color={'teal'}>
                            {userData.data.username}
                        </Heading>
                    ) : null}
                    {userData && userData.data && userData.data.email ? (
                        <Text as="b" color="teal.200" align={'center'}>
                            {userData.data.email}
                        </Text>
                    ) : null}
                </Stack>
            </Center>
        </div>
    );
};

export default Profile;

import { useState } from 'react';

import { Heading, Stack, Center, Text } from '@chakra-ui/react';

import { FaUserCircle } from 'react-icons/fa';

import hookUserMe from '../../hooks/user/hookUserMe';

const Profile = () => {
    const [userData, setUserData] = useState(false);

    hookUserMe({
        userData,
        setUserData,
    });

    return (
        <div>
            <Center margin={'5%'}>
                <Stack spacing={'3%'}>
                    <FaUserCircle color={'teal'} size={'100%'} />
                    {userData && userData.username ? (
                        <Heading align={'center'} color={'teal'}>
                            {userData.username}
                        </Heading>
                    ) : null}
                    {userData && userData.email ? (
                        <Text as="b" color="teal.200" align={'center'}>
                            {userData.email}
                        </Text>
                    ) : null}
                </Stack>
            </Center>
        </div>
    );
};

export default Profile;

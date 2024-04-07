import { useState } from 'react';

import { Box, Stack } from '@chakra-ui/react';

import hookGetAllUsers from '../../hooks/admin/hookGetAllUsers';
import UserCard from './userCard';

const DisplayUsers = () => {
  const [usersData, setUsersData] = useState(false);

  hookGetAllUsers({ usersData, setUsersData });

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
          {usersData ? (
            usersData.map((user) => {
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

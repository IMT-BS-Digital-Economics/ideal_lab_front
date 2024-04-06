import { useEffect, useState } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

import StatusBox from './statusBox';

const ControlStatus = ({ unique_id }) => {
  return (
    <Box
      bg={'teal.100'}
      borderRadius={'xl'}
      boxShadow={'xl'}
      p={'1em'}
      bottom={0}
    >
      <Flex gap={2} direction={'column'}>
        <Text as="b" color={'teal.400'} size={'lg'}>
          {unique_id}
        </Text>
      </Flex>
      <Flex alignItems={'center'} direction={'column'} gap={2}>
        <StatusBox unique_id={unique_id} />
      </Flex>
    </Box>
  );
};

export default ControlStatus;

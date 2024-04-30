import { useState } from 'react';

import NextLink from 'next/link';

import { Box, Text, Stack, Heading, Flex, IconButton } from '@chakra-ui/react';

import { ArrowBackIcon } from '@chakra-ui/icons';

import { useApiCallDataRespDelay } from '../../../hooks/callApi';

const DisplayLog = ({ unique_id, log_name }) => {
    const [content, setContent] = useState(false);

    useApiCallDataRespDelay(
        'get',
        `/projects/${unique_id}/log/${log_name}`,
        {},
        content,
        setContent,
        30000
    );

    return (
        <Flex direction={'row'} gap={3} margin={'1%'}>
            <Box
                flex="1"
                h={'100%'}
                w={'100%'}
                borderRadius={'lg'}
                bg={'gray.100'}
                padding={'1%'}
                boxShadow={'lg'}
            >
                <Flex align={'center'} gap={3}>
                    <NextLink href={`/project/${unique_id}`}>
                        <IconButton
                            colorScheme={'teal'}
                            icon={<ArrowBackIcon />}
                            aria-label={'return-button'}
                        />
                    </NextLink>
                    <Heading color={'teal'}>{log_name}</Heading>
                </Flex>
                <Box mt={'1%'} overflowY={'scroll'} h={'90%'}>
                    <Stack>
                        {content.data &&
                        content.data.details &&
                        Array.isArray(content.data.details)
                            ? content.data.details.map((element, index) => {
                                  return (
                                      <Box
                                          key={index}
                                          bg={'teal'}
                                          padding={'2%'}
                                          borderRadius={'xl'}
                                          boxShadow={'xl'}
                                      >
                                          <Text as={'b'} color={'white'}>
                                              {element}
                                          </Text>
                                      </Box>
                                  );
                              })
                            : null}
                    </Stack>
                </Box>
            </Box>
        </Flex>
    );
};

export default DisplayLog;

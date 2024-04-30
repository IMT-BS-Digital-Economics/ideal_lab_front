import { useRef, useState } from 'react';

import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react';

import NextLink from 'next/link';

import { FaArrowCircleDown } from 'react-icons/fa';

import { useApiCallDataResp } from '../../../../hooks/callApi';

const DisplayAllLogs = ({ unique_id }) => {
    const [logs, setLogs] = useState(false);

    useApiCallDataResp('get', `/projects/${unique_id}/logs`, {}, logs, setLogs);

    const scrollBoxRef = useRef(null);

    const scrollToBottom = () => {
        const scrollBox = scrollBoxRef.current;
        if (scrollBox) {
            // Using scrollTo with smooth behavior
            scrollBox.scrollTo({
                top: scrollBox.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Flex>
            {logs && logs.data && (
                <Flex align={'center'} gap={3}>
                    <Box overflowY={'scroll'} maxH={'15vh'} ref={scrollBoxRef}>
                        <Stack>
                            {logs.data.map((element, index) => {
                                return (
                                    <NextLink
                                        href={`/project/${unique_id}/${element}`}
                                        passHref
                                        key={index}
                                    >
                                        <Button
                                            fontSize="sm"
                                            color="teal"
                                            w={'100%'}
                                        >
                                            {element}
                                        </Button>
                                    </NextLink>
                                );
                            })}
                        </Stack>
                    </Box>
                    <Flex direction={'column'} align={'center'}>
                        <IconButton
                            onClick={scrollToBottom}
                            icon={<FaArrowCircleDown />}
                            isRound
                            colorScheme={'teal'}
                            aria-label={'scrolling-button'}
                        />
                        <Text as="b" fontSize="md" color={'teal'}>
                            Scroll down
                        </Text>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};

export default DisplayAllLogs;

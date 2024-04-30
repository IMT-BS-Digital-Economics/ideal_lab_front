import { useEffect, useState } from 'react';

import { Heading, Stack, Box, Tooltip, Skeleton } from '@chakra-ui/react';

import { IoPause, IoStop, IoPlay, IoReload } from 'react-icons/io5';
import {
    useApiCallDataRespDelay,
    useApiCallToastResp,
} from '../../../hooks/callApi';
import StatusButton from './statusButton';
import { pubSub } from '../../service/pubSub';

const StatusBox = ({ unique_id }) => {
    const [updateStatus, setUpdateStatus] = useState(false);

    const [status, setStatus] = useState(false);

    const [isSubmit, setIsSubmit] = useState(false);

    useApiCallToastResp(
        'post',
        `projects/${unique_id}/status/${updateStatus}`,
        {},
        isSubmit,
        setIsSubmit
    );

    useApiCallDataRespDelay(
        'get',
        `/projects/${unique_id}/status`,
        {},
        status,
        setStatus,
        15000
    );

    useEffect(() => {
        setStatus(false);
    }, [updateStatus]);

    useEffect(() => {
        const refreshHandler = () => {
            setStatus(false); // Trigger the refresh logic
        };

        pubSub.subscribe('refreshStatus', refreshHandler);

        return () => {
            pubSub.events.refreshStatus = pubSub.events.refreshStatus.filter(
                (cb) => cb !== refreshHandler
            );
        };
    }, []);

    return (
        <Stack>
            <Skeleton
                isLoaded={status && status.data && status.data.status}
                speed={0.8}
            >
                {status && status.data && status.data.status ? (
                    <Box>
                        <Heading
                            fontSize={'sm'}
                            color={'teal'}
                            align={'center'}
                            mb={3}
                            style={{ textTransform: 'capitalize' }}
                        >
                            {status.data.status}
                        </Heading>
                        {status.data.status === 'Powered Off' ||
                        status.data.status === 'Ready to launch' ? (
                            <Tooltip label={'Run the script'} openDelay={500}>
                                <StatusButton
                                    icon={<IoPlay />}
                                    name="running"
                                    setStatus={setUpdateStatus}
                                    setIsSubmit={setIsSubmit}
                                />
                            </Tooltip>
                        ) : null}
                        {status.data.status === 'Operational' ? (
                            <Stack direction={'row'}>
                                <Tooltip label={'Turn off'} openDelay={500}>
                                    <StatusButton
                                        icon={<IoStop />}
                                        name="off"
                                        setStatus={setUpdateStatus}
                                        setIsSubmit={setIsSubmit}
                                    />
                                </Tooltip>
                                <Tooltip label={'Pause'} openDelay={500}>
                                    <StatusButton
                                        icon={<IoPause />}
                                        name="stopped"
                                        setStatus={setUpdateStatus}
                                        setIsSubmit={setIsSubmit}
                                    />
                                </Tooltip>
                                <Tooltip
                                    label={'Reboot the script'}
                                    openDelay={500}
                                >
                                    <StatusButton
                                        icon={<IoPlay />}
                                        name="running"
                                        setStatus={setUpdateStatus}
                                        setIsSubmit={setIsSubmit}
                                    />
                                </Tooltip>
                            </Stack>
                        ) : null}
                        {status.data.status === 'Zombie Detected' ? (
                            <Tooltip label={'Turn off'} openDelay={500}>
                                <StatusButton
                                    icon={<IoStop />}
                                    name="off"
                                    setStatus={setUpdateStatus}
                                    setIsSubmit={setIsSubmit}
                                />
                            </Tooltip>
                        ) : null}
                        {status.data.status === 'Manually stopped' ? (
                            <Stack direction={'row'}>
                                <Tooltip label={'Turn off'} openDelay={500}>
                                    <StatusButton
                                        icon={<IoStop />}
                                        name="off"
                                        setStatus={setUpdateStatus}
                                        setIsSubmit={setIsSubmit}
                                    />
                                </Tooltip>
                                <Tooltip label={'Restart'} openDelay={500}>
                                    <StatusButton
                                        icon={<IoPlay />}
                                        name="restart"
                                        setStatus={setUpdateStatus}
                                        setIsSubmit={setIsSubmit}
                                    />
                                </Tooltip>
                            </Stack>
                        ) : null}
                        {status.data.status === 'Failure Detected' ? (
                            <Stack direction={'row'}>
                                <Tooltip label={'Turn off'} openDelay={500}>
                                    <StatusButton
                                        icon={<IoStop />}
                                        name="off"
                                        setStatus={setUpdateStatus}
                                        setIsSubmit={setIsSubmit}
                                    />
                                </Tooltip>
                                <Tooltip
                                    label={'Reboot the script'}
                                    openDelay={500}
                                >
                                    <StatusButton
                                        icon={<IoReload />}
                                        name="running"
                                        setStatus={setUpdateStatus}
                                        setIsSubmit={setIsSubmit}
                                    />
                                </Tooltip>
                            </Stack>
                        ) : null}
                    </Box>
                ) : (
                    <Box w={'100%'} h={'100%'}>
                        <Heading
                            fontSize={'sm'}
                            color={'teal'}
                            align={'center'}
                            mb={3}
                            style={{ textTransform: 'capitalize' }}
                        >
                            Hello
                        </Heading>
                        <Tooltip label={'Reboot the script'} openDelay={500}>
                            <StatusButton icon={<IoReload />} name="running" />
                        </Tooltip>
                    </Box>
                )}
            </Skeleton>
        </Stack>
    );
};

export default StatusBox;

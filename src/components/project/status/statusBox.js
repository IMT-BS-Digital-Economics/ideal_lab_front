import { useEffect, useState } from 'react';

import { Heading, Stack, Box, Tooltip, Skeleton } from '@chakra-ui/react';

import { IoPause, IoStop, IoPlay, IoReload } from 'react-icons/io5';
import {
    useApiCallDataRespDelay,
    useApiCallToastResp,
} from '../../../hooks/callApi';
import StatusButton from './statusButton';
import { pubSub } from '../../service/pubSub';

const STATUS_ACTIONS = {
    'Powered Off': [
      { icon: <IoPlay/>, name: 'running', label: 'Run the script' }
    ],
    'Ready to launch': [
      { icon: <IoPlay/>, name: 'running', label: 'Run the script' }
    ],
    'Operational': [
      { icon: <IoStop/>, name: 'off', label: 'Turn off' },
      { icon: <IoPause/>, name: 'stopped', label: 'Pause' },
      { icon: <IoPlay/>, name: 'running', label: 'Reboot the script' }
    ],
    'Zombie Detected': [
      { icon: <IoStop/>, name: 'off', label: 'Turn off' }
    ],
    'Manually stopped': [
      { icon: <IoStop/>, name: 'off', label: 'Turn off' },
      { icon: <IoPlay/>, name: 'restart', label: 'Restart' }
    ],
    'Failure Detected': [
      { icon: <IoStop/>, name: 'off', label: 'Turn off' },
      { icon: <IoReload/>, name: 'running', label: 'Reboot the script' }
    ]
};

const DEFAULT_ACTIONS = [
    { icon: <IoStop/>, name: 'off', label: 'Turn off' },
];

const StatusBox = ({ unique_id }) => {
    const [updateStatus, setUpdateStatus] = useState(false);
    const [status, setStatus] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

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

    const currentStatus = status?.data?.status;
    const actions = STATUS_ACTIONS[currentStatus] || DEFAULT_ACTIONS;

    return (
        <Stack>
            <Skeleton
                isLoaded={status && status.data && status.data.status}
                speed={0.8}
            >
                <Box>
                    <Heading
                        fontSize={'sm'}
                        color={'teal'}
                        align={'center'}
                        mb={3}
                        style={{ textTransform: 'capitalize' }}
                    >
                        {currentStatus || 'Undefined'}
                    </Heading>

                    <Stack direction="row" className="justify-center">
                        {actions.map((action, index) => (
                            <StatusButton key={index}
                            icon={action.icon}
                            name={action.name}
                            label={action.label}
                            setStatus={setUpdateStatus}
                            setIsSubmit={setIsSubmit}/>
                        ))}
                    </Stack>
                </Box>
            </Skeleton>
        </Stack>
    );
};

export default StatusBox;

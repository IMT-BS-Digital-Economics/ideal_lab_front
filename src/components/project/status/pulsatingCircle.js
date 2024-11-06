import { useState } from 'react';

import { Box, Tooltip } from '@chakra-ui/react';
import { useApiCallDataRespDelay } from '../../../hooks/callApi';
import { keyframes } from '@emotion/react';

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const getStatusColor = (status) => {
    switch (status) {
        case 'Operational':
            return 'green.400';
        case 'Manually stopped':
            return 'gray.200';
        case 'Failure Detected':
            return 'red.200';
        case 'Zombie Detected':
            return 'yellow.400';
        case 'Ready to launch':
            return 'teal.500';
        case 'Creating project':
            return 'teal.400';
        default:
            return 'gray.400'; // Default color
    }
};

const PulsatingCircle = ({ unique_id }) => {
    const [status, setStatus] = useState(false);

    useApiCallDataRespDelay(
        'get',
        `/projects/${unique_id}/status`,
        {},
        status,
        setStatus,
        15000
    );

    return (
        <>
            {status && status.data && status.data.status ? (
                <Tooltip label={status.data.status}>
                    <Box
                        height="15px"
                        width="15px"
                        borderRadius="50%"
                        bg={getStatusColor(status.data.status)}
                        animation={
                            status.data.status !== 'Powered Off' &&
                            status.data.status !== 'Ready to launch'
                                ? `${pulseAnimation} 2s infinite`
                                : null
                        }
                    />
                </Tooltip>
            ) : null}
        </>
    );
};

export default PulsatingCircle;

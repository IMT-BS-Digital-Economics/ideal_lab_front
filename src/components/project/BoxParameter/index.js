import { Flex } from '@chakra-ui/react';

import StaticContent from './staticContent';
import { useState } from 'react';

const BoxParameter = ({ name, description, Content }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <Flex position="relative" direction={'column'} h="100%" gap={3}>
            <StaticContent
                name={name}
                description={description}
                showInfo={showInfo}
                setShowInfo={setShowInfo}
            />
            <Flex
                zIndex={showInfo ? '0' : '10'}
                h="100%"
                w="100%"
                justify="center"
                align="center"
                direction={'column'}
                style={{
                    filter: showInfo ? 'blur(4px)' : 'none',
                    pointerEvents: showInfo ? 'none' : 'all',
                }}
            >
                {Content}
            </Flex>
        </Flex>
    );
};

export default BoxParameter;

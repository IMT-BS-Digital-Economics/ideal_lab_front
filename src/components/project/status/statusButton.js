import { IconButton, Tooltip } from '@chakra-ui/react';

const StatusButton = ({ icon: Icon, name, setIsSubmit, setStatus, label }) => {
    return (
        <Tooltip label={label} openDelay={400}>
            <IconButton
                icon={Icon}
                onClick={() => {
                    setStatus(name);
                    setIsSubmit(true);
                }}
                color={'teal'}
                bg={'teal.100'}
                size={'lg'}
                isRound
                aria-label={`action-${name}`}
                _hover={{ bg: 'teal.500', color: 'teal.100' }}
            />
        </Tooltip>
    );
};

export default StatusButton;

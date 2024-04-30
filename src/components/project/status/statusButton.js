import { IconButton } from '@chakra-ui/react';

const StatusButton = ({ icon, name, setIsSubmit, setStatus }) => {
    return (
        <IconButton
            icon={icon}
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
    );
};

export default StatusButton;

import { Text } from '@chakra-ui/react';

const StaticVal = ({ value }) => {
    return (
        <Text fontSize="sm" color={'teal'}>
            {value}
        </Text>
    );
};

export default StaticVal;

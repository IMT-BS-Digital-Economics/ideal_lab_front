import { useBreakpointValue } from '@chakra-ui/react';

const useResponsiveValue = ({ defaultValue, base, xl }) => {
    const breakPointVal = useBreakpointValue({ base, xl });

    if (breakPointVal !== undefined) {
        return breakPointVal;
    }

    return defaultValue;
};

export default useResponsiveValue;

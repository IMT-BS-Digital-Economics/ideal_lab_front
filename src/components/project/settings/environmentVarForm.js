import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useApiCallToastResp } from '../../../hooks/callApi';

const EnvironmentVarForm = ({
    unique_id,
    isSubmit,
    setIsSubmit,
    oldKey = undefined,
}) => {
    const [key, setKey] = oldKey ? useState(oldKey) : useState('');
    const [value, setValue] = useState('');

    const handleChange = (e, setter) => {
        setter(e.target.value);
    };

    useApiCallToastResp(
        'post',
        oldKey
            ? `projects/${unique_id}/env/update`
            : `projects/${unique_id}/env/`,
        {
            key: key,
            value: value,
        },
        isSubmit,
        setIsSubmit
    );

    return (
        <Stack direction={'row'}>
            <FormControl>
                {oldKey === undefined && <FormLabel>Key</FormLabel>}
                <Input
                    isDisabled={!!oldKey}
                    value={key}
                    onChange={(e) => handleChange(e, setKey)}
                    minW={!!oldKey ? "20vw" : undefined}
                    bg={"teal.500"}
                    color="white"
                ></Input>
            </FormControl>
            <FormControl>
                {oldKey === undefined && <FormLabel>Value</FormLabel>}
                <Input
                    value={value}
                    onChange={(e) => handleChange(e, setValue)}
                    minW={!!oldKey ? "30vw" : undefined}
                    maxW={!!oldKey ? "30vw" : undefined}
                ></Input>
            </FormControl>
        </Stack>
    );
};

export default EnvironmentVarForm;

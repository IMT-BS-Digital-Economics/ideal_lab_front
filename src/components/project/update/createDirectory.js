import { useState } from 'react';

import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { useApiCallToastResp } from '../../../hooks/callApi';

const CreateDirectory = ({ unique_id }) => {
    const [path, setPath] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    useApiCallToastResp(
        'post',
        `projects/${unique_id}/directory`,
        {
            path: path,
        },
        isSubmit,
        setIsSubmit
    );

    return (
        <FormControl>
            <InputGroup size="md">
                <Input
                    value={path}
                    onChange={(event) => setPath(event.target.value)}
                />
                <InputRightElement width="4.5rem">
                    {path !== '' ? (
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            onClick={() => {
                                setIsSubmit(true);
                            }}
                        >
                            Create
                        </Button>
                    ) : null}
                </InputRightElement>
            </InputGroup>
            <FormHelperText as="b" color={'teal'}>
                Indicate a path to create a directory
            </FormHelperText>
        </FormControl>
    );
};

export default CreateDirectory;

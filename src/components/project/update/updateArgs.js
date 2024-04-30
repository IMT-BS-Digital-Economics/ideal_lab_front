import { useState } from 'react';

import {
    FormControl,
    IconButton,
    Input,
    Stack,
    Tag,
    TagLabel,
    TagCloseButton,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useApiCallToastResp } from '../../../hooks/callApi';
import UpdateModal from './updateModal';

const UpdateArgs = ({
    unique_id,
    isOpen,
    onClose,
    content,
    isSubmit,
    setIsSubmit,
}) => {
    const [value, setValue] = useState('');

    const [args, setArgs] = useState(content);

    useApiCallToastResp(
        'post',
        `/projects/${unique_id}/update/arguments`,
        { arguments: args },
        isSubmit,
        setIsSubmit
    );

    const EditForm = (
        <>
            <FormControl align={'center'}>
                <Stack direction={'row'}>
                    <Input
                        placeholder={'Add an argument'}
                        onChange={(e) => setValue(e.target.value)}
                        variant={'filled'}
                    />
                    <IconButton
                        aria-label={'Check-Icon'}
                        icon={<CheckIcon />}
                        colorScheme={'teal'}
                        onClick={() => {
                            setArgs((args) => [...args, value]);
                            setValue('');
                        }}
                    />
                </Stack>
            </FormControl>
            <Stack direction={'row'} p={'1%'}>
                {args.map((element) => {
                    return (
                        <Tag
                            size={'md'}
                            key={element}
                            borderRadius={'full'}
                            variant="subtle"
                            colorScheme={'teal'}
                        >
                            <TagLabel>{element}</TagLabel>
                            <TagCloseButton
                                onClick={() => {
                                    setArgs(
                                        args.filter((args) => args !== element)
                                    );
                                }}
                            />
                        </Tag>
                    );
                })}
            </Stack>
        </>
    );

    return (
        <UpdateModal
            setIsSubmit={setIsSubmit}
            Content={EditForm}
            isOpen={isOpen}
            onClose={onClose}
            Title={'Update arguments'}
        />
    );
};

export default UpdateArgs;

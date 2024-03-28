import { useState } from "react";

import {FormControl, IconButton, Input, Stack, Tag, TagLabel, TagCloseButton} from "@chakra-ui/react";
import {CheckIcon, CloseIcon, EditIcon} from "@chakra-ui/icons";
import {useApiCallToastResp} from "../../../hooks/callApi";

const UpdateArgs = ({unique_id, content, isSubmit, setIsSubmit}) => {
    const [value, setValue] = useState('');

    const [args, setArgs] = useState(content)

    console.log(isSubmit)

    useApiCallToastResp(
        'post',
        `/projects/${unique_id}/update/arguments`,
        {"arguments": args},
        isSubmit,
        setIsSubmit
    )

    return (
        <>
        <FormControl align={"center"}>
            <Stack direction={"row"}>
                <Input
                    placeholder={"Add an argument"}
                    onChange={(e) => setValue(e.target.value)}
                    variant={"filled"}
                />
                <IconButton
                    aria-label={"Check-Icon"}
                    icon={<CheckIcon/>}
                    colorScheme={"teal"}
                    onClick={() => {
                        setArgs(args => [...args, value]);
                        setValue('');
                    }}
                />
            </Stack>
        </FormControl>
            <Stack direction={"row"}>
                {args.map((element) => {
                    return (
                        <Tag
                            size={"md"}
                            key={element}
                            borderRadius={"full"}
                            variant='subtle'
                            colorScheme={"cyan"}
                        >
                            <TagLabel>{element}</TagLabel>
                            <TagCloseButton
                                onClick={() => {setArgs(args.filter((args) => args !== element))}}
                            />
                        </Tag>
                    );
                })}
            </Stack>
        </>
    );
}

export default UpdateArgs
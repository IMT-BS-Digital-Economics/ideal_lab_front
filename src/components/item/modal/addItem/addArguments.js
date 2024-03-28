import { useState } from "react";

import {
    Input,
    IconButton,
    Stack,
    FormControl,
} from "@chakra-ui/react";

import {
    CheckIcon,
    CloseIcon,
    EditIcon
} from "@chakra-ui/icons";

const AddArguments = ({args, setArgs}) => {
    const [isEditing, setIsEditing] = useState(false);

    const [value, setValue] = useState('');

    return (
            <FormControl align={"center"}>

                {isEditing ?
                (
                <Stack direction={"row"}>
                    <Input
                        placeholder={"Add an argument"}
                        onChange={(e) => setValue(e.target.value)}
                        variant={"filled"}
                    />
                    <IconButton
                        aria-label={"Check-Icon"}
                        icon={<CheckIcon/>}
                        onClick={() => {
                            setArgs(args => [...args, value]);
                            setValue('');
                        }}
                    />
                    <IconButton
                        aria-label={"Close-Icon"}
                        icon={<CloseIcon/>}
                        onClick={() => setIsEditing(false)}
                    />
                </Stack>
                )
                : (
                <IconButton
                    aria-label={"Edit-Icon"}
                    icon={<EditIcon/>}
                    onClick={() => setIsEditing(true)}
                />
                )}
            </FormControl>
    );
}

export default AddArguments;
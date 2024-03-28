import { useState, useEffect } from "react";

import {
    Tag,
    TagLabel,
    Button,
    Text,
    useDisclosure,
    FormControl,
    Input,
    IconButton,
    Stack,

} from "@chakra-ui/react";

import {CheckIcon, CloseIcon} from "@chakra-ui/icons";

import ArgumentsTags from "../modal/addItem/argumentsTags";

import hookUpdateItemParam from "../../../hooks/items/update/hookUpdateItemParam";
import UpdateModal from "../modal/updateModal";

const ArgumentsBox = ({itemId, itemArgs}) => {
    const [args, setArgs] = useState([]);

    const [load, setLoad] = useState(false);

    const [argsCpy, setArgsCpy] = useState([]);

    const [isSubmit, setIsSubmit] = useState()

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isEditing, setIsEditing] = useState(false);

    const [value, setValue] = useState('');

    useEffect(() => {
        if (args.length === 0 && itemArgs && !load) {
            setArgs(itemArgs);
            setArgsCpy(itemArgs);
            setLoad(true);
        }

        if (args !== argsCpy && load) {
            setIsSubmit(true);
            setArgsCpy(args);
        }
    })

    hookUpdateItemParam('test', itemId, "arguments", args, isSubmit, setIsSubmit);

    return (
        <>
            <Button
                variant={"outline"}
                colorScheme={"cyan"}
                onClick={onOpen}
            >
                <Stack direction={"row"} spacing={"3"}>
                    {
                        itemArgs && itemArgs.length >= 1 ? (
                            itemArgs.map((arg) => {
                                return (
                                    <div>
                                        <Tag
                                            size={"md"}
                                            key={arg}
                                            borderRadius={"full"}
                                            variant='subtle'
                                            colorScheme={"cyan"}
                                        >
                                            <TagLabel>{arg}</TagLabel>
                                        </Tag>
                                    </div>
                                );
                            })
                        )
                        : <Text>Add arguments</Text>
                    }
                </Stack>
            </Button>

            <UpdateModal
                Title={"Update arguments"}
                Content={
                <div>
                    <FormControl mb={3}>
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
                    </FormControl>
                    <ArgumentsTags
                        args={args}
                        setArgs={setArgs}
                    />
                </div>}
                setIsSubmit={setIsSubmit}
                isOpen={isOpen}
                onClose={onClose}
                noFooter={true}
            />
        </>
    );
}

export default ArgumentsBox;
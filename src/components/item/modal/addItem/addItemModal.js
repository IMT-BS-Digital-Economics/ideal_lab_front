import {
    Button,
    Fade,
    FormControl, FormLabel, Input, InputGroup, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack
} from "@chakra-ui/react";

import SelectTime from "../../../../utils/item/selectTime";
import AddExecutable from "./addExecutable";
import AddArguments from "./addArguments";
import ArgumentsTags from "./argumentsTags";
import {useState} from "react";

import hookAddItem from "../../../../hooks/items/create/hookAddItem";

const AddItemModal = ({isOpen, onClose}) => {
    const [isSubmit, setIsSubmit] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');

    const [executable, setExecutable] = useState(false);

    const [args, setArgs] = useState([]);

    const resetVal = () => {
        setTitle('');
        setDescription('');
        setHour('');
        setMinutes('');
        setExecutable('');
        setArgs([]);
    }

    hookAddItem({title, description, hour, minutes, executable, isSubmit, setIsSubmit, onClose, resetVal, args});

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset='slideInBottom'
        >
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Create a new item</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormControl>
                            <Stack spacing={3}>
                                <InputGroup variant={"filled"} size={"lg"} flexDirection={"column"}>
                                    <FormLabel>Title</FormLabel>
                                    <Input
                                        placeholder={"Title"}
                                        value={title}
                                        onChange={(e) => {
                                            setTitle(e.target.value)
                                        }}
                                    />
                                </InputGroup>
                                <InputGroup variant={"filled"} size={"lg"} flexDirection={"column"}>
                                    <FormLabel>Description</FormLabel>
                                    <Input
                                        placeholder={"Description"}
                                        value={description}
                                        onChange={(e) => {
                                            setDescription(e.target.value)
                                        }}
                                    />
                                </InputGroup>
                                <div>
                                    <FormLabel>Time to start</FormLabel>
                                    <SelectTime
                                        setHour={setHour}
                                        setMinutes={setMinutes}
                                    />
                                </div>
                                <AddExecutable
                                    setExecutable={setExecutable}
                                />
                                {
                                    executable ?
                                        (
                                            <>
                                                <FormLabel>Arguments</FormLabel>
                                                <AddArguments
                                                    args={args}
                                                    setArgs={setArgs}
                                                />
                                            </>
                                        ) : null
                                }
                                {
                                    arguments ?
                                        (
                                            <ArgumentsTags
                                                args={args}
                                                setArgs={setArgs}
                                            />
                                        ) : null
                                }
                            </Stack>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Fade in={title && description && hour && minutes && executable && arguments}>
                            <Button
                                onClick={() => {
                                    setIsSubmit(true);
                                }}
                                mr={3}
                                colorScheme={"cyan"}
                            >
                                Create Item
                            </Button>
                        </Fade>
                        <Button
                            onClick={() => {
                                onClose();
                                resetVal();
                            }}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
}

export default AddItemModal;
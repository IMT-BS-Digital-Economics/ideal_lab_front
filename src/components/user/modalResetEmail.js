import { useState } from "react";

import {
    Button,
    Fade,
    FormControl,
    FormLabel, Input, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";

import hookEditMail from "../../hooks/user/hookEditMail";

const ModalResetEmail = () => {
    const { isOpen, onOpen, onClose} = useDisclosure();

    const [isEdit, setIsEdit] = useState(false);

    const [newEmail, setNewEmail] = useState(null);
    const [confirmNewEmail, setConfirmNewEmail] = useState('');

    hookEditMail({isEdit, setIsEdit, newEmail, setNewEmail});

    return (
        <>
            <Button
                onClick={onOpen}
                colorScheme={"teal"}
                size={"lg"}
                w={"20%"}
            >
                Change Email
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                motionPreset='slideInBottom'
            >
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Change your email</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    placeholder={"Email"}
                                    type={"email"}
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                />
                                <FormLabel>Confirm Email</FormLabel>
                                <Input
                                    placeholder={"Confirm Email"}
                                    type={"email"}
                                    value={confirmNewEmail}
                                    onChange={(e) => setConfirmNewEmail(e.target.value)}
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Fade in={newEmail === confirmNewEmail}>
                                <Button
                                    onClick={() => {
                                        setIsEdit(true);
                                        onClose();
                                        setConfirmNewEmail('');
                                    }}
                                    colorScheme={"cyan"}
                                    variant={"ghost"}
                                    mr={3}
                                >
                                    Submit
                                </Button>
                            </Fade>
                            <Button
                                onClick={onClose}
                                colorScheme={"cyan"}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    );
}

export default ModalResetEmail;
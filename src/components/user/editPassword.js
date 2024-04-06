import { useState, useRef } from "react";

import {
    Button,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    useDisclosure
} from "@chakra-ui/react";

import hookUserMe from "../../hooks/user/hookUserMe";
import hookForgotPassword from "../../hooks/user/hookForgotPassword";

const EditPassword = () => {
    const [userData, setUserData] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);

    const cancelRef = useRef();

    hookUserMe({userData, setUserData});

    const email = userData.email;

    hookForgotPassword({isSubmit, setIsSubmit, email});

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                variant={"outline"}
                size={"lg"}
                w={"20%"}
                colorScheme={"teal"}
                onClick={onOpen}
            >
                Change Password
            </Button>

            <AlertDialog
                motionPreset='slideInBottom'
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            Change your password
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are your sure ?
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button
                                onClick={() => {
                                    setIsSubmit(true);
                                    onClose();
                                }}
                                colorScheme={"cyan"}
                                variant={"solid"}
                                mr={3}
                            >
                                Submit
                            </Button>
                            <Button
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default EditPassword;
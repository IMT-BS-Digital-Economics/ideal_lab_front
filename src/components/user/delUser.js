import { useRef, useState } from "react";

import {
    AlertDialog,
    AlertDialogBody, AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    useDisclosure
} from "@chakra-ui/react";

import hookDeleteUser from "../../hooks/user/hookDeleteUser";

const DelUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();

    const [isDelete, setIsDelete] = useState(false);

    hookDeleteUser({isDelete});

    return (
        <>
            <Button
                size={"lg"}
                colorScheme={"red"}
                variant={"outline"}
                onClick={onOpen}
            >
                Delete Account
            </Button>

            <AlertDialog
                motionPreset='slideInBottom'
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                    <AlertDialogHeader fontSize={"lg"} fontWeight={"bold"}>
                        Delete User
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure ? You can't undo this action afterwards.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button
                            colorScheme={"red"}
                            onClick={() => {
                                onClose();
                                setIsDelete(true)
                            }}
                                mr={3}
                        >
                            Delete
                        </Button>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default DelUser;
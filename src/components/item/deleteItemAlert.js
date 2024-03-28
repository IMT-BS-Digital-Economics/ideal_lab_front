import { useState, useRef } from "react";

import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
} from "@chakra-ui/react";

import hookDeleteItem from "../../hooks/items/delete/hookDeleteItem";

const DeleteItemAlert = ({currentId, itemTitle, itemId, setItemId, isOpen, onClose}) => {
    const [submitDel, setSubmitDel] = useState(false);

    const cancelRef = useRef()

    hookDeleteItem(currentId, itemId, setItemId, submitDel, setSubmitDel);

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize={"lg"} fontWeight={"bold"}>Delete {itemTitle}</AlertDialogHeader>
                    <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button
                            colorScheme='red'
                            onClick={() => {
                                setSubmitDel(true);
                                onClose();
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
    );
}

export default DeleteItemAlert;
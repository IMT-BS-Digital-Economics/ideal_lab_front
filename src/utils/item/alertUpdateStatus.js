import { useState, useRef } from "react";

import {
    MenuItem,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
    Heading,
    Text,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";

import hookUpdateItemStatus from "../../hooks/items/update/hookUpdateItemStatus";

const AlertUpdateStatus = ({icon, itemId, statusName, statusAbout, newStatus, setNeedUpdate}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const cancelRef = useRef(null);

    const [submitUpdate, setSubmitUpdate] = useState('');

    console.log(itemId)

    hookUpdateItemStatus(submitUpdate, setSubmitUpdate, itemId, newStatus, setNeedUpdate);

    return (
        <>
            <MenuItem
                icon={icon}
                onClick={onOpen}
            >
                {statusName}
            </MenuItem>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontWeight={"bold"} fontSize={"lg"}>{statusName} Item</AlertDialogHeader>
                        <AlertDialogBody>
                            <Stack>
                                <Heading fontSize={"md"}>
                                    {statusAbout}
                                </Heading>
                            </Stack>
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Stack direction={"row"} alignItems={"center"}>
                                <Text>
                                    Are you sure to {statusName} the item ?
                                </Text>
                                <Button
                                    colorScheme={"cyan"}
                                    variant={"outline"}
                                    onClick={() => {
                                        setSubmitUpdate(true);
                                        onClose();
                                    }}
                                    mr={3}
                                >
                                    Yes
                                </Button>
                                <Button ref={cancelRef} onClick={onClose}>
                                    No
                                </Button>
                            </Stack>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default AlertUpdateStatus;
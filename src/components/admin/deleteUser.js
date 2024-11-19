import { useRef, useState } from 'react';

import {
    AlertDialog,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogOverlay,
    Button,
    Heading,
    Text,
    useDisclosure,
} from '@chakra-ui/react';

import { useApiCallToastResp } from '../../hooks/callApi';

const DeleteUser = ({ user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();

    const [userEmailDel, setUserEmailDel] = useState(false);

    useApiCallToastResp('delete', '/admin/user', {data: { email: userEmailDel}}, userEmailDel, setUserEmailDel);

    return (
        <>
            <Button variant={'outline'} colorScheme={'red'} onClick={onOpen}>
                Delete User
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                motionPreset="slideInBottom"
            >
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <Heading>Delete profile of {user.username} ?</Heading>
                    </AlertDialogHeader>
                    <AlertDialogBody mb={3}>
                        <Text>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            If you're deleting this profile, user's information
                            and items will be DEFINITIVELY deleted
                        </Text>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            ml={3}
                            colorScheme={'red'}
                            onClick={() => {
                                setUserEmailDel(user.email);
                                onClose();
                            }}
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default DeleteUser;

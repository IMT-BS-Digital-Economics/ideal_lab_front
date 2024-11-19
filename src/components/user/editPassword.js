import { useState, useRef } from 'react';

import {
    Button,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    useDisclosure,
} from '@chakra-ui/react';

import { useApiCallDataResp, useApiCallToastResp } from '../../hooks/callApi';

const EditPassword = () => {
    const [userData, setUserData] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);

    const cancelRef = useRef();

    useApiCallDataResp('get', '/user/me', '', userData, setUserData);

    const email = userData && userData.data ? (userData.data.email) : null;
    
    useApiCallToastResp('post', '/user/forgot_password', {"email": email}, isSubmit, setIsSubmit);

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                variant={'outline'}
                size={'lg'}
                w={{ base: '75%', xl: '20%' }}
                colorScheme={'teal'}
                onClick={onOpen}
            >
                Change Password
            </Button>

            <AlertDialog
                motionPreset="slideInBottom"
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            Change your password
                        </AlertDialogHeader>
                        <AlertDialogBody>Are your sure ?</AlertDialogBody>
                        <AlertDialogFooter>
                            <Button
                                onClick={() => {
                                    setIsSubmit(true);
                                    onClose();
                                }}
                                colorScheme={'teal'}
                                variant={'solid'}
                                mr={3}
                            >
                                Submit
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default EditPassword;

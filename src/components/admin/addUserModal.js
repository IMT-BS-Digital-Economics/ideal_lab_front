import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

import UserForm from "./userForm";

const AddUserModal = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add a user</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <UserForm
                        onClose={onClose}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default AddUserModal;
import {
    Button,
    Heading,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalBody,
    ModalOverlay,
} from '@chakra-ui/react';

const UpdateModal = ({
    Title,
    Content,
    setIsSubmit,
    isOpen,
    onClose,
    noFooter,
}) => {
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader>
                        <Heading>{Title}</Heading>
                    </ModalHeader>
                    <ModalBody>{Content}</ModalBody>
                    {!noFooter ? (
                        <ModalFooter>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button
                                onClick={() => {
                                    setIsSubmit(true);
                                    onClose();
                                }}
                                ml={3}
                                color={'cyan.700'}
                            >
                                Update
                            </Button>
                        </ModalFooter>
                    ) : null}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default UpdateModal;

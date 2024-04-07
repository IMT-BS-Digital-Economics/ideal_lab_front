import { useState } from 'react';

import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react';

import EnvironmentVarForm from './environmentVarForm';

const AddEnvironmentVariableModal = ({ unique_id, isLargeScreen }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isSubmit, setIsSubmit] = useState(false);

    const addEnvVar = () => {
        setIsSubmit(true);
    };

    return (
        <>
            <Button
                width={{ base: '100%', sm: 'auto' }}
                fontSize={['sm', 'md', 'lg']} // Responsive font size
                onClick={onOpen}
            >
                {isLargeScreen ? 'Add environment variable' : 'Add'}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Add environment variable to project{' '}
                        <Text as={'span'} color={'teal'}>
                            {unique_id}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction={'column'} gap={3}>
                            <Text>
                                Fill the followings inputs field to add a
                                environment variable
                            </Text>
                            <EnvironmentVarForm
                                unique_id={unique_id}
                                isSubmit={isSubmit}
                                setIsSubmit={setIsSubmit}
                            />
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme="teal"
                            variant="solid"
                            onClick={addEnvVar}
                        >
                            Add
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddEnvironmentVariableModal;

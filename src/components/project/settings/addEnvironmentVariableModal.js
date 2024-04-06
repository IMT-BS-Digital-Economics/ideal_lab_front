import {useState} from "react";

import {
    Button, Flex, FormControl, FormLabel, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import EnvironmentVarForm from "./environmentVarForm";
import {useApiCallToastResp} from "../../../hooks/callApi";

const AddEnvironmentVariableModal = ({unique_id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isSubmit, setIsSubmit] = useState(false);

    const addEnvVar = () => {
        setIsSubmit(true);
    }

    return (
        <>
            <Button onClick={onOpen}>Add environment variable</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Add environment variable to project <Text as={"span"} color={"teal"}>{unique_id}</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction={"column"} gap={3}>
                            <Text>Fill the followings inputs field to add a environment variable</Text>
                            <EnvironmentVarForm unique_id={unique_id} isSubmit={isSubmit} setIsSubmit={setIsSubmit}/>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="teal" variant='solid' onClick={addEnvVar}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddEnvironmentVariableModal;
import {
    Heading,
    Modal,
    ModalCloseButton,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Text,
    useDisclosure,
    Input, Flex
} from "@chakra-ui/react";
import {useState} from "react";
import {useApiCallToastResp} from "../../../hooks/callApi";
import NextLink from "next/link";

const DeleteModal = ({unique_id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const confirmValue = `project/${unique_id}`;

    const [inputValue, setInputValue] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);

    useApiCallToastResp(
        'delete',
        `projects/${unique_id}`,
        {},
        isSubmit,
        setIsSubmit
    )

    return (
        <>
            <Button colorScheme="red" onClick={onOpen}>Delete project</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                            Delete project <Text as={"span"} color={"teal"}>{unique_id}</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                       <Flex direction={"column"} gap={3}>
                           <Text>To confirm deletion, type <Text as={"span"} color={"teal"}>{confirmValue}</Text> in the text input field.</Text>
                           <Input value={inputValue} onChange={(e) => (setInputValue(e.target.value))}></Input>
                       </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <NextLink href={'/projects'} passHref>
                            <Button onClick={() => setIsSubmit(true)} colorScheme="red" variant='solid' isDisabled={!(inputValue === confirmValue)}>Delete forever</Button>
                        </NextLink>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default DeleteModal;
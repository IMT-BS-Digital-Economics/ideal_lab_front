import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Stack,
    Text,
    Button,
    Heading,
    Card,
    CardHeader,
    Box
} from '@chakra-ui/react';

const UserItems = ({user}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                onClick={onOpen}
            >
                See items
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                        {user.username}'s items
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Box m={"3%"} overflowY={"auto"} maxHeight={"48em"} ml={6} mt={6} h={"48em"}>
                            <Stack>
                                {
                                    user.items.length >= 1 ? (
                                        user.items.map((item) => {
                                            return (
                                                <Card>
                                                    <CardHeader>
                                                        <Heading>
                                                            {item.title}
                                                        </Heading>
                                                    </CardHeader>
                                                </Card>
                                            );
                                        })
                                    ) : <Text>No item to display</Text>
                                }
                            </Stack>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UserItems;
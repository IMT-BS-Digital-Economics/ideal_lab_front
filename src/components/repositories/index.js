import {
    Box,
    Button,
    Flex,
    FormControl,
    Heading,
    IconButton,
    Input,
    List,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spacer,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import { DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useApiCallDataResp, useApiCallToastResp } from '../../hooks/callApi';
import { FaArrowsRotate } from 'react-icons/fa6';

const Repository = () => {
    const [repositories, setRepositories] = useState(false);
    const [newRepo, setNewRepo] = useState({
        user: '',
        token: '',
        project: '',
        version: '',
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const [addNewRepo, setAddNewRepo] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [title, setTitle] = useState('');

    useApiCallDataResp(
        'get',
        'repositories/',
        {},
        repositories,
        setRepositories
    );

    useApiCallToastResp(
        'post',
        '/repositories/clone',
        {
            user: newRepo.user,
            token: newRepo.token,
            repository: newRepo.project,
            version: newRepo.version,
        },
        addNewRepo,
        setAddNewRepo
    );

    useApiCallToastResp(
        'delete',
        `/repositories/${isSubmit}`,
        {},
        isSubmit,
        setIsSubmit
    );

    const handleDelete = (title) => {
        setIsSubmit(title);
        setRepositories((prevState) => ({
            ...prevState,
            data: prevState.data.filter((repo) => repo.title !== title),
        }));
    };

    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.700', 'white');

    const handleAddRepository = () => {
        setAddNewRepo(true);
        setRepositories(false);
    };

    useEffect(() => {
        if (addNewRepo === false) {
            setNewRepo({ user: '', token: '', project: '', version: '' });
        }
    }, [addNewRepo]);

    return (
        <Box bg={bgColor} p={5}>
            <VStack spacing={4} align="stretch">
                <Flex gap={3} align={'center'}>
                    <IconButton
                        colorScheme="teal"
                        aria-label="Refresh"
                        size="lg"
                        icon={<FaArrowsRotate />}
                        onClick={() => {
                            setRepositories(false);
                        }}
                    />
                    <Heading color="teal.600">Repository Manager</Heading>
                </Flex>

                <Stack
                    direction={'column'}
                    align="center"
                    bg={'teal.50'}
                    p={'1em'}
                    borderRadius={'lg'}
                    shadow={'md'}
                    spacing={3}
                >
                    <Heading color="teal" fontSize={'md'}>
                        Clone a new repository
                    </Heading>
                    <FormControl>
                        <Stack direction={'row'} spacing={3}>
                            <Input
                                placeholder="Github Username"
                                value={newRepo.user}
                                onChange={(e) =>
                                    setNewRepo({
                                        ...newRepo,
                                        user: e.target.value,
                                    })
                                }
                            />
                            <Input
                                placeholder="Github token"
                                value={newRepo.token}
                                onChange={(e) =>
                                    setNewRepo({
                                        ...newRepo,
                                        token: e.target.value,
                                    })
                                }
                            />
                        </Stack>
                        <Stack direction={'row'} spacing={3} mt={3}>
                            <Input
                                placeholder="Github repository name"
                                value={newRepo.project}
                                onChange={(e) =>
                                    setNewRepo({
                                        ...newRepo,
                                        project: e.target.value,
                                    })
                                }
                            />
                            <Input
                                placeholder="Python version"
                                value={newRepo.version}
                                onChange={(e) =>
                                    setNewRepo({
                                        ...newRepo,
                                        version: e.target.value,
                                    })
                                }
                            />
                        </Stack>
                    </FormControl>
                    <Button
                        leftIcon={<AddIcon />}
                        colorScheme="teal"
                        onClick={handleAddRepository}
                    >
                        Add new repository
                    </Button>
                </Stack>

                <List spacing={3} overflowY={'scroll'} maxH={'50vh'}>
                    {repositories.data &&
                        repositories.data.map((repo) => (
                            <ListItem
                                key={repo.id}
                                d="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                bg="teal.50"
                                p={2}
                                borderRadius="md"
                                shadow={'md'}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    align={'center'}
                                >
                                    <Heading
                                        fontSize={{ base: 'sm', lg: 'md' }}
                                        color={textColor}
                                    >
                                        {repo.title}
                                    </Heading>
                                    <Spacer />
                                    <IconButton
                                        icon={<DeleteIcon />}
                                        aria-label="Delete"
                                        colorScheme="red"
                                        variant="ghost"
                                        onClick={() => {
                                            onOpen();
                                            setTitle(repo.title);
                                        }}
                                    />
                                </Stack>
                            </ListItem>
                        ))}
                </List>
            </VStack>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text as={'span'} color={'red'}>
                            Delete
                        </Text>{' '}
                        repository {title}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Are you sure you want to delete this repository ?
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="red"
                            mr={3}
                            onClick={() => {
                                handleDelete(title);
                                onClose();
                            }}
                        >
                            Delete
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Repository;

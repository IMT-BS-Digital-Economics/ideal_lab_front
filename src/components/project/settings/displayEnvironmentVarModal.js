import {
    Box,
    Button,
    Divider,
    Flex,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import { useApiCallDataResp } from '../../../hooks/callApi';
import { FaPen } from 'react-icons/fa6';
import EnvironmentVarForm from './environmentVarForm';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const UpdateVar = ({ unique_id, name, setEdit }) => {
    const [isSubmit, setIsSubmit] = useState(false);

    return (
        <Flex align={'center'} gap={3}>
            <EnvironmentVarForm
                unique_id={unique_id}
                isSubmit={isSubmit}
                setIsSubmit={setIsSubmit}
                oldKey={name}
            />
            <IconButton
                aria-label={'update value'}
                icon={<CheckIcon />}
                onClick={() => setIsSubmit(true)}
            />
            <IconButton
                aria-label={'update value'}
                icon={<CloseIcon />}
                onClick={() => setEdit(false)}
            />
        </Flex>
    );
};

const DisplayVariable = ({ name, value, header = false, unique_id }) => {
    const [edit, setEdit] = useState(false);

    return (
        <Flex gap={3}>
            {!edit ? (
                <>
                    <Box
                        p={'1em'}
                        bg={'gray.200'}
                        borderRadius={'2xl'}
                        align={'center'}
                        minW={'20vw'}
                    >
                        <Text>{name}</Text>
                    </Box>
                    <Box
                        w="100%"
                        p={'1em'}
                        bg={'gray.200'}
                        borderRadius={'2xl'}
                        align={'center'}
                        minW={'30vw'}
                        maxW={'30vw'}
                    >
                        <Text>{value}</Text>
                    </Box>
                    <IconButton
                        isRound={true}
                        aria-label="Edit value"
                        icon={<FaPen />}
                        isDisabled={header}
                        colorScheme="teal"
                        size={'lg'}
                        onClick={() => setEdit(true)}
                        justifyContent="center"
                        alignItems="center"
                    />
                </>
            ) : (
                <UpdateVar
                    unique_id={unique_id}
                    name={name}
                    setEdit={setEdit}
                />
            )}
        </Flex>
    );
};

const DisplayEnvironmentVarModal = ({ unique_id, isLargeScreen }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [environmentVars, setEnvironmentVars] = useState(false);

    useApiCallDataResp(
        'get',
        `projects/${unique_id}/env/`,
        {},
        environmentVars,
        setEnvironmentVars
    );

    useEffect(() => {
        if (!isOpen && environmentVars !== false) {
            setEnvironmentVars(false);
        }
    }, [isOpen]);

    return (
        <>
            <Button
                width={{ base: '100%', sm: 'auto' }}
                fontSize={['sm', 'md', 'lg']} // Responsive font size
                onClick={onOpen}
            >
                {isLargeScreen ? 'See environment variables' : 'See'}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        See environment variable of project{' '}
                        <Text as={'span'} color={'teal'}>
                            {unique_id}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <DisplayVariable
                            name={'Key'}
                            value={'Value'}
                            header
                            unique_id={unique_id}
                        />
                        <Divider mt={'1%'} />
                        <Stack
                            direction={'column'}
                            gap={3}
                            overflowY={'scroll'}
                            maxH={'50vh'}
                            mt={'1%'}
                        >
                            {environmentVars !== undefined &&
                                Array.isArray(environmentVars.data) &&
                                environmentVars.data.map((element, index) => {
                                    return (
                                        <Flex key={index}>
                                            <DisplayVariable
                                                name={element.key}
                                                value={element.value}
                                                unique_id={unique_id}
                                            />
                                        </Flex>
                                    );
                                })}
                            {environmentVars !== undefined &&
                            Array.isArray(environmentVars.data) &&
                            environmentVars.data.length === 0 ? (
                                <Text>No environment variables</Text>
                            ) : null}
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default DisplayEnvironmentVarModal;

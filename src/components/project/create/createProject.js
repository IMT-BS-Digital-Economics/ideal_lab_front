import {
    Box,
    Flex,
    FormControl,
    Heading,
    Input,
    Stack,
    Button,
    Text,
    ScaleFade,
    CircularProgress,
} from '@chakra-ui/react';
import AddExecutable from './addExecutable';
import { useEffect, useState } from 'react';
import { useApiCallDataResp } from '../../../hooks/callApi';
import { useRouter } from 'next/router';

const CreateProject = () => {
    const [project, setProject] = useState(true);
    const [executable, setExecutable] = useState(false);
    const [repository, setRepository] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (project && project.data && project.data.unique_id) {
            router.push(`/project/${project.data.unique_id}`);
        }
    }, [project]);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        repository: undefined,
        executable: undefined,
    });

    const handleChange = (name, e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const toggleCreation = () => {
        setProject(false);
    };

    useApiCallDataResp(
        'post',
        '/projects/',
        {
            title: formData.title,
            description: formData.description,
            repository: repository,
            executable: executable,
        },
        project,
        setProject
    );

    return (
        <>
            {project ? (
                <Flex
                    flex="1"
                    direction={'column'}
                    display={{ base: 'none', xl: 'flex' }}
                >
                    <Box h={'100%'} w={'100%'} bg={'teal.50'} padding={'2%'}>
                        <Stack spacing={5}>
                            <Flex gap={1} direction={'column'}>
                                <Heading fontSize="2xl" color={'teal'}>
                                    Create a new project
                                </Heading>
                                <Heading fontSize="lg">
                                    This is where everything{' '}
                                    <Text as={'span'} color={'teal'}>
                                        start
                                    </Text>
                                </Heading>
                            </Flex>
                            <FormControl>
                                <Heading fontSize="lg" color={'teal'}>
                                    Title
                                </Heading>
                                <Heading fontSize="md" as={'b'}>
                                    Choose a{' '}
                                    <Text as={'span'} color={'teal'}>
                                        name
                                    </Text>{' '}
                                    for your project to retrieve it later in
                                    your{' '}
                                    <Text as={'span'} color={'teal'}>
                                        projects tab
                                    </Text>
                                </Heading>
                                <Input
                                    variant={'filled'}
                                    mt={'1%'}
                                    value={formData.title}
                                    onChange={(e) => handleChange('title', e)}
                                />
                            </FormControl>
                            <FormControl>
                                <Heading fontSize="lg" color={'teal'}>
                                    Description
                                </Heading>
                                <Heading fontSize="md">
                                    Brief explanation on what the{' '}
                                    <Text as={'span'} color={'teal'}>
                                        goal
                                    </Text>{' '}
                                    of your project,{' '}
                                    <Text as={'span'} color={'teal'}>
                                        what is does
                                    </Text>
                                    ,{' '}
                                    <Text as={'span'} color={'teal'}>
                                        for what ?
                                    </Text>
                                </Heading>
                                <Input
                                    variant={'filled'}
                                    mt={'1%'}
                                    value={formData.description}
                                    onChange={(e) =>
                                        handleChange('description', e)
                                    }
                                />
                            </FormControl>
                            <AddExecutable
                                repository={repository}
                                setRepository={setRepository}
                                setExecutable={setExecutable}
                            />
                            <ScaleFade
                                direction="left"
                                initialScale={0.9}
                                in={
                                    formData.title !== '' &&
                                    formData.description !== '' &&
                                    executable
                                }
                            >
                                <Button
                                    onClick={toggleCreation}
                                    maxW="100px"
                                    colorScheme={'teal'}
                                >
                                    Create
                                </Button>
                            </ScaleFade>
                        </Stack>
                    </Box>
                </Flex>
            ) : (
                <Flex
                    w="100%"
                    direction={'column'}
                    gap={3}
                    align={'center'}
                    justify={'center'}
                >
                    <Heading color={'teal'}>Creation of your project</Heading>
                    <CircularProgress isIndeterminate color="teal" />
                </Flex>
            )}
        </>
    );
};

export default CreateProject;

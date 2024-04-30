import {
    Box,
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    ScaleFade,
    Stack,
    Text,
} from '@chakra-ui/react';
import AddExecutable from './addExecutable';

const CreateForm = ({
    formData,
    repository,
    setRepository,
    executable,
    setExecutable,
    setIsSubmit,
    handleChange,
}) => {
    return (
        <Flex flex="1" direction={'column'}>
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
                            for your project to retrieve it later in your{' '}
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
                            onChange={(e) => handleChange('description', e)}
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
                            onClick={() => setIsSubmit(true)}
                            maxW="100px"
                            colorScheme={'teal'}
                        >
                            Create
                        </Button>
                    </ScaleFade>
                </Stack>
            </Box>
        </Flex>
    );
};

export default CreateForm;

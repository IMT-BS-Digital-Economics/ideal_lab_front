import { useEffect, useState } from 'react';

import { FormControl, Heading, Select, Text } from '@chakra-ui/react';
import { useApiCallDataResp } from '../../../hooks/callApi';

const AddExecutable = ({ repository, setRepository, setExecutable }) => {
    const [repositoriesList, setRepositoriesList] = useState(false);

    const [executableList, setExecutableList] = useState(true);

    useApiCallDataResp(
        'get',
        '/repositories/',
        {},
        repositoriesList,
        setRepositoriesList
    );

    useEffect(() => {
        setExecutableList(false);
    }, [repository]);

    useApiCallDataResp(
        'get',
        `repositories/${repository}`,
        {},
        executableList,
        setExecutableList
    );

    return (
        <>
            <FormControl>
                <Heading color={'teal'} fontSize="lg">
                    Repository
                </Heading>
                <Heading fontSize={'md'}>
                    Select the{' '}
                    <Text as={'span'} color={'teal'}>
                        repository
                    </Text>{' '}
                    that contain the{' '}
                    <Text as={'span'} color={'teal'}>
                        script
                    </Text>{' '}
                    you want to use
                </Heading>
                <Select
                    mt={'1%'}
                    variant={'filled'}
                    placeholder={'Select Repository Folder'}
                    onChange={(e) => {
                        setRepository(e.target.value);
                    }}
                    fontSize={'sm'}
                >
                    {repositoriesList &&
                        true &&
                        Array.isArray(repositoriesList.data) &&
                        repositoriesList.data.map((element, index) => {
                            return (
                                <option key={index} value={element.title}>
                                    {element.title}
                                </option>
                            );
                        })}
                </Select>
            </FormControl>
            {repository ? (
                <FormControl>
                    <Heading fontSize="lg" color={'teal'}>
                        Executable
                    </Heading>
                    <Heading fontSize={'md'}>
                        Take the{' '}
                        <Text as={'span'} color={'teal'}>
                            script executable
                        </Text>{' '}
                        that will{' '}
                        <Text as={'span'} color={'teal'}>
                            run
                        </Text>{' '}
                        with your project
                    </Heading>
                    <Select
                        mt={'1%'}
                        variant={'filled'}
                        placeholder={'Select Executable'}
                        onChange={(e) => {
                            setExecutable(e.target.value);
                        }}
                    >
                        {executableList &&
                            true &&
                            Array.isArray(executableList.data) &&
                            executableList.data.map((element) => {
                                let filename = element.split('/');

                                return (
                                    <option key={element} value={element}>
                                        {filename[filename.length - 1]}
                                    </option>
                                );
                            })}
                        fontSize={'sm'}
                    </Select>
                </FormControl>
            ) : null}
        </>
    );
};

export default AddExecutable;

import {useState} from "react";

import {Box, Button, Heading, Stack} from "@chakra-ui/react";

import NextLink from "next/link";

import {useApiCallDataResp} from "../../../hooks/callApi";

const DisplayAllLogs = ({unique_id}) => {
    const [logs, setLogs] = useState(false)

    useApiCallDataResp(
        'get',
        `/projects/${unique_id}/logs`,
        {},
        logs,
        setLogs
    )

    return (
        <>
        {
            logs && logs.data ? (
                <>
                    <Heading color={"teal"}>Latest logs</Heading>
                    <Box bg={"teal"} padding={"2%"} borderRadius={"xl"} boxShadow={"xl"} h={"90%"} overflowY={"scroll"}>
                        <Stack>
                            {logs.data.map((element) => {
                                return (
                                    <NextLink href={`/project/${unique_id}/${element}`} passHref>
                                        <Button colorScheme={"teal"}>{element}</Button>
                                    </NextLink>
                                );
                            })}
                        </Stack>
                    </Box>
                </>
            ) : null
        }
        </>
    );
}

export default DisplayAllLogs;
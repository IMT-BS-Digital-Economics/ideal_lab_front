import {useState} from "react";

import {Box, Text, Stack, Heading, Flex, Button, IconButton} from "@chakra-ui/react";

import {ArrowBackIcon} from "@chakra-ui/icons";

import Projects from "../index";
import {useApiCallDataResp, useApiCallDataRespDelay} from "../../../hooks/callApi";
import NextLink from "next/link";

const DisplayLog = ({unique_id, log_name}) => {
    const [content, setContent] = useState(false);

    useApiCallDataRespDelay(
        'get',
        `/projects/15a285b8-95c3-47a4-9d1e-921cb8a2477f/log/output_27-03-2024_22-26-38`,
        {},
        content,
        setContent,
        30000
    )

    return (
        <Stack direction={"row"} spacing={5}>
            <Projects/>
            <Box h={"90vh"} w={"100%"} borderRadius={"lg"} bg={"gray.200"} padding={"1%"}>
                <Flex align={"center"} gap={3}>
                    <NextLink href={`/project/${unique_id}`}>
                        <IconButton colorScheme={"teal"} icon={<ArrowBackIcon/>}></IconButton>
                    </NextLink>
                    <Heading color={"teal"}>{log_name}</Heading>
                </Flex>
                <Box overflowY={"scroll"} mt={"1%"}>
                    <Stack>
                    {content.data && content.data.details && Array.isArray(content.data.details)? (
                        content.data.details.map((element) => {
                            return (
                                <Box bg={"teal"} padding={"2%"} borderRadius={"xl"} boxShadow={"xl"}>
                                    <Text as={"b"} color={"white"}>{element}</Text>
                                </Box>
                            );
                        })
                    ) : null}
                    </Stack>
                </Box>
            </Box>
        </Stack>
    );
}

export default DisplayLog
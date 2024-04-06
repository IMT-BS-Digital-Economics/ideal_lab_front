import {useState} from "react";

import {Box, Text, Stack, Heading, Flex, Button, IconButton} from "@chakra-ui/react";

import {ArrowBackIcon} from "@chakra-ui/icons";

import ProjectsTab from "../index";
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
        <Flex direction={"row"} gap={3} margin={"1%"}>
            <Box flex="1" h={"100%"} w={"100%"} borderRadius={"lg"} bg={"gray.100"} padding={"1%"} boxShadow={"lg"}>
                <Flex align={"center"} gap={3}>
                    <NextLink href={`/project/${unique_id}`}>
                        <IconButton colorScheme={"teal"} icon={<ArrowBackIcon/>}></IconButton>
                    </NextLink>
                    <Heading color={"teal"}>{log_name}</Heading>
                </Flex>
                <Box mt={"1%"} overflowY={"scroll"} h={"90%"}>
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
        </Flex>
    );
}

export default DisplayLog
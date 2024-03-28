import {useState} from "react";

import {Box, Heading, Flex, Text} from "@chakra-ui/react";

import {useApiCallDataResp} from "../../../hooks/callApi";
import StatusBox from "./statusBox";


const ControlStatus = ({unique_id}) => {
    const [status, setStatus] = useState(false);

    useApiCallDataResp(
        'get',
        `projects/${unique_id}/status`,
        {},
        status,
        setStatus
    )

    return (
        <>
        {
            status && status.data && status.data.status ? (
                <>
                    <Heading color={"teal"}>Handle Project Status</Heading>
                    <Box bg={"teal"} borderRadius={"xl"} boxShadow={"xl"} h={"90%"} p={"2%"}>
                        <Flex gap={2}>
                            <Heading color={"white"} size={"lg"}>Current Status:</Heading>
                            <Heading color={"teal.100"} size={"lg"}>{status.data.status}</Heading>
                        </Flex>
                        <Flex alignItems={"center"} direction={"column"} gap={2}>
                            <StatusBox unique_id={unique_id} itemStatus={status.data.status}/>
                        </Flex>
                    </Box>
                </>
            ) : null
        }
        </>
    );
}

export default ControlStatus;
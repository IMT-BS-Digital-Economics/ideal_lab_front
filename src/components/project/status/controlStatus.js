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
                    <Box bg={"teal.100"} borderRadius={"xl"} boxShadow={"xl"} p={"1em"} bottom={0}>
                        <Flex gap={2} direction={"column"}>
                            <Text as="b" color={"teal"} size={"lg"}>{unique_id}</Text>
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
import {useState} from "react";

import {Box, Flex, Heading, Switch, FormControl, FormLabel, Text} from "@chakra-ui/react";
import {useApiCallToastResp} from "../../../hooks/callApi";

const TriggerAutoLaunch = ({unique_id, auto_launch}) => {
    const [autoLaunch, setAutoLaunch] = useState(auto_launch);
    const [isSubmit, setIsSubmit] = useState(false);

    useApiCallToastResp(
        'post',
        `projects/${unique_id}/trigger/auto_launch`,
        {},
        isSubmit,
        setIsSubmit
    )

    return (
        <Flex direction={"column"} gap={3} align={"center"}>
            <Heading color={"teal"}>{autoLaunch ?  "Active" : "Inactive"}</Heading>
            <Switch id='auto-start' colorScheme='teal' size='lg' isChecked={autoLaunch} onChange={() => {
                setAutoLaunch(!autoLaunch);
                setIsSubmit(true)
            }}/>
        </Flex>
    );
}

export default TriggerAutoLaunch;
import {useState} from "react";

import {Box, Flex, Heading, Switch, FormControl, FormLabel} from "@chakra-ui/react";
import {useApiCallToastResp} from "../../hooks/callApi";

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
        <Box bg={"teal"} padding={"2%"} borderRadius={"xl"} boxShadow={"xl"}>
            <Flex direction={"column"}>
                <Heading size="lg" color={"white"}>Auto-Start</Heading>
                <FormControl display='flex' alignItems='center'>
                    <FormLabel color={"white"} htmlFor='auto-launch' mb='0'>
                        Enable auto-start ?
                    </FormLabel>
                    <Switch id='auto-start' colorScheme='teal' size='lg' isChecked={autoLaunch} onChange={() => {
                        setAutoLaunch(!autoLaunch);
                        setIsSubmit(true)
                    }}/>
                </FormControl>
            </Flex>
        </Box>
    );
}

export default TriggerAutoLaunch;
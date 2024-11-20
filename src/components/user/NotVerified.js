import { useState } from "react";

import { useApiCallToastResp } from "../../hooks/callApi";
import { Heading, Text, Button, Flex } from "@chakra-ui/react";

const NotVerified = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    useApiCallToastResp('post', '/user/verify', '', isSubmit, setIsSubmit);

    return (
        <Flex 
            justify="top"
            align="center"
            minHeight="100vh"
            direction="column"
            gap={"1"}
        >
            <Heading color={"teal.500"}>
                Please verify your email
            </Heading>
            <Text color={"teal.300"}>
                Your address email has not been verified, please check your mailbox.
            </Text>
            <Button onClick={() => setIsSubmit(true)} mt="1%">
                Resend verification email
            </Button>
        </Flex>
    );
}

export default NotVerified;
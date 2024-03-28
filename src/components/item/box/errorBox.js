import { useState } from "react";

import {
    Box,
    Heading,
    Text,
    Flex,
    Spacer,
    Collapse,
    Stack,
    Button,
    Container,
    Fade,
    Tooltip,
    useToast,
    useClipboard,
    Card,
    CardHeader,
    CardBody,
} from "@chakra-ui/react";

import {
    CopyIcon
} from "@chakra-ui/icons";

const ErrorBox = (props) => {
    const toast = useToast();

    const { hasCopied, onCopy } = useClipboard(props.traceback);

    const [show, setShow] = useState(false);

    let timeInfo = props.time.split(' ');

    return (
        <>
            <Card>
                <CardHeader>
                    <Flex>
                        <Box>
                            <Heading
                                    fontSize={"md"}
                                >
                                    Time
                            </Heading>
                            <Text>{timeInfo[0]}</Text>
                        </Box>
                        <Spacer/>
                        <Box>
                            <Heading
                                fontSize={"md"}
                            >
                                Date
                            </Heading>
                            <Text>{timeInfo[1]}</Text>
                        </Box>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Container margin={"1%"}>
                        <Stack direction={"column"} spacing={6}>
                            <Collapse startingHeight={20} in={show} margin={"1%"}>
                                {props.traceback}
                            </Collapse>
                            <Button
                                color={"black"}
                                onClick={() => setShow(!show)}
                                mt={"2%"}
                            >
                                Show More
                            </Button>
                            <Fade in={show} align={"center"}>
                                <Tooltip
                                    label={"Copy traceback"}
                                >
                                    <Button
                                        color="black"
                                        leftIcon={<CopyIcon/>}
                                        iconSpacing={null}
                                        onClick={() => {
                                            onCopy();
                                            toast({
                                                title: "Traceback has been copied to your clipboard !",
                                                status: "success",
                                                duration: 9000,
                                                isClosable: true,
                                            })
                                        }}
                                    />
                                </Tooltip>
                            </Fade>
                        </Stack>
                    </Container>
                </CardBody>
            </Card>
        </>
    );
}

export default ErrorBox;
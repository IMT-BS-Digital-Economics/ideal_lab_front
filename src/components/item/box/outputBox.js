import { useState, useEffect } from "react";

import { motion, isValidMotionProp } from 'framer-motion'

import {
    chakra,
    shouldForwardProp,
    Heading,
    Stack,
    Button,
    Box,
    Flex,
    Spacer,
    Container,
    useDisclosure,
    Card,
    CardHeader,
    CardBody,
    Text,
    Tooltip,
} from "@chakra-ui/react";

import hookGetOutput from "../../../hooks/items/read/hookGetOutput";
import ErrorReportModal from "../modal/errorReportModal";
import ErrorBox from "./errorBox";

const OutputLiveBox = ({output}) => {
    return (
        <Box
            bg={"blackAlpha.800"}
            borderRadius={"lg"}
            h={"70%"}
            mt={6}
        >
            <Text
                color={"whiteAlpha.800"}
                position={"absolute"}
                p={6}
            >
                > {output.out}
            </Text>
        </Box>
    );
}

const OutputBox = ({itemId, itemStatus}) => {
    const [errorReportList, setErrorReportList] = useState([]);
    const [output, setOuput] = useState('');

    const [outputType, setOutputType] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);
    const [isSubmitErrO, setIsSubmitErrO] = useState(false);

    const [lastErrorReport, setLastErrorReport] = useState(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })

    useEffect(() => {
        if (!lastErrorReport) {
            setIsSubmitErrO(true);
            setLastErrorReport(errorReportList[(errorReportList.length - 1)])
        }
    })

    hookGetOutput(itemId, itemStatus, setOuput, "output", isSubmit, setIsSubmit);
    hookGetOutput(itemId, itemStatus, setErrorReportList, "err_output", isSubmitErrO, setIsSubmitErrO);

    return (
        // <Flex margin={"2%"} direction={{sm:'column', lg:'row'}}>
        //     <Card flex={"1"}>
        //         <CardHeader>
        //             <Flex>
        //                 <div>
        //                     <Heading>
        //                         Live Output
        //                     </Heading>
        //                     <Text>You want to see you're collect in live, it's possible</Text>
        //                 </div>
        //                 <Spacer />
        //                 {
        //                     !isSubmit ?
        //                         (
        //                             <Tooltip hasArrow label={"Can't use Live preview right now, item should be in Running mode"} isDisabled={itemStatus === "running"}>
        //                                 <Button
        //                                     colorScheme={"green"}
        //                                     onClick={() => {
        //                                         if (itemStatus === "running") {
        //                                             setOutputType("output")
        //                                             setIsSubmit(!isSubmit);
        //                                         }
        //                                     }}
        //                                     ml={3}
        //                                 >
        //                                     Start Live
        //                                 </Button>
        //                             </Tooltip>
        //                         ) : (
        //                             <ChakraBox
        //                                 animate={{
        //                                     opacity: ["75%", "10%", "75%", "10%", "75%", "10%"],
        //                                 }}
        //                                 transition={{
        //                                     duration:3,
        //                                     repeat: Infinity,
        //                                     repeatType: "loop",
        //                                 }}
        //                             >
        //                                 <Button
        //                                     colorScheme={"green"}
        //                                     onClick={() => {
        //                                         setOutputType("output")
        //                                         setIsSubmit(!isSubmit);
        //                                     }}
        //                                     ml={3}
        //                                 >
        //                                     Stop Live
        //                                 </Button>
        //                             </ChakraBox>
        //                         )
        //                 }
        //             </Flex>
        //         </CardHeader>
        //         <CardBody>
        //             <OutputLiveBox
        //                 output={output}
        //             />
        //         </CardBody>
        //     </Card>
        //     <Card w={{lg:"40%", sm:'100%'}} ml={3}>
        //         <CardHeader>
        //             <Heading>
        //                 Errors reports
        //             </Heading>
        //             <Text>For every errors than can occurs</Text>
        //         </CardHeader>
        //         <CardBody>
        //             <Box
        //                 p={"1%"}
        //                 w={"100%"}
        //                 h="25em"
        //                 align={"center"}
        //             >
        //                 <Stack spacing={6}>
        //                     {
        //                         lastErrorReport && lastErrorReport.time ?
        //                             (
        //                                 <Button
        //                                     colorScheme={"cyan"}
        //                                     variant={"outline"}
        //                                     onClick={() => {
        //                                         setOutputType("err_output");
        //                                         setIsSubmitErrO(true);
        //                                         onOpen();
        //                                     }}
        //                                 >
        //                                     Get more error reports
        //                                 </Button>
        //                             )
        //                             : null
        //                     }
        //                     }
        //                     {
        //                         lastErrorReport && lastErrorReport.time ?
        //                             (
        //                                 <ErrorBox
        //                                     time={lastErrorReport.time}
        //                                     traceback={lastErrorReport.traceback}
        //                                 />
        //                             )
        //                             : null
        //                     }
        //                     {
        //                         errorReportList !== 1 && isOpen ?
        //                             (
        //                                 <ErrorReportModal
        //                                     errorReportList={errorReportList}
        //                                     isOpen={isOpen}
        //                                     onClose={onClose}
        //                                 >
        //                                     {errorReportList.map((errorReport) => {
        //                                         return (
        //                                             <Container key={errorReport.id}>
        //                                                 <ErrorBox
        //                                                     time={errorReport.time}
        //                                                     traceback={errorReport.traceback}
        //                                                 />
        //                                             </Container>
        //                                         );
        //                                     })}
        //                                 </ErrorReportModal>
        //                             )
        //                             : null
        //                     }
        //                 </Stack>
        //             </Box>
        //         </CardBody>
        //     </Card>
        // </Flex>
        <></>
    )
}

export default OutputBox;
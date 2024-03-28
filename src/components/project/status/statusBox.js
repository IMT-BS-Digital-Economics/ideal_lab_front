import { useState } from "react";

import {
    Heading,
    Stack,
    Box,
    Tooltip,
    Button, IconButton
} from "@chakra-ui/react";

import { IoPause, IoStop, IoPlay, IoSync, IoReload } from "react-icons/io5";
import {useApiCallToastResp} from "../../../hooks/callApi";
import StatusButton from "./statusButton";


const StatusBox = ({unique_id, itemStatus}) => {
    const [status, setStatus] = useState(false)

    const [isSubmit, setIsSubmit] = useState(false);

    useApiCallToastResp(
        'post',
        `projects/${unique_id}/status/${status}`,
        {},
        isSubmit,
        setIsSubmit
    )

    return (
        <Stack>
            {itemStatus ?
                (
                    <Box>
                        <Heading fontSize={"sm"} color={"teal"} align={"center"} mb={3} style={{textTransform: 'capitalize'}}>
                            {itemStatus}
                        </Heading>
                        {
                            itemStatus === "Powered Off" ?
                                (
                                    <Tooltip
                                        label={"Run the script"}
                                        openDelay={500}
                                    >
                                        <StatusButton icon={<IoPlay/>} name="running" setStatus={setStatus} setIsSubmit={setIsSubmit}/>
                                    </Tooltip>
                                )
                                : null
                        }
                        {
                            itemStatus === "Operational" ?
                                (
                                    <Stack direction={"row"}>
                                        <Tooltip
                                            label={"Turn off"}
                                            openDelay={500}
                                        >
                                            <StatusButton icon={<IoStop/>} name="off" setStatus={setStatus} setIsSubmit={setIsSubmit}/>
                                        </Tooltip>
                                        <Tooltip
                                            label={"Pause"}
                                            openDelay={500}
                                        >
                                            <StatusButton icon={<IoStop/>} name="stopped" setStatus={setStatus} setIsSubmit={setIsSubmit}/>
                                        </Tooltip>
                                        <Tooltip
                                            label={"Reboot the script"}
                                            openDelay={500}
                                        >
                                            <StatusButton icon={<IoPlay/>} name="running" setStatus={setStatus} setIsSubmit={setIsSubmit}/>
                                        </Tooltip>
                                    </Stack>
                                )
                                : null
                        }
                        {
                            itemStatus === "Zombie Detected" ?
                                (
                                    <Stack direction={"row"}>
                                        <Tooltip
                                            label={"Turn off"}
                                            openDelay={500}
                                        >
                                            <StatusButton icon={<IoStop/>} name="off" setStatus={setStatus} setIsSubmit={setIsSubmit}/>
                                        </Tooltip>
                                    </Stack>
                                )
                                : null
                        }
                        {
                            itemStatus === "Manually stopped" ?
                                (
                                    <Stack direction={"row"}>
                                        <Tooltip
                                            label={"Turn off"}
                                            openDelay={500}
                                        >
                                            <StatusButton icon={<IoStop/>} name="off" setStatus={setStatus} setIsSubmit={setIsSubmit}/>
                                        </Tooltip>
                                        <Tooltip
                                            label={"Restart"}
                                            openDelay={500}
                                        >
                                            <StatusButton icon={<IoPlay/>} name="restart" setStatus={setStatus} setIsSubmit={setIsSubmit}/>
                                        </Tooltip>
                                    </Stack>
                                )
                                : null
                        }
                        {
                            itemStatus === "Failure Detected" ?
                                (
                                    <Stack direction={"row"}>
                                        <Tooltip
                                            label={"Turn off"}
                                            openDelay={500}
                                        >
                                            <StatusButton icon={<IoStop/>} name="off" setStatus={setStatus} setIsSubmit={setIsSubmit}/>
                                        </Tooltip>
                                        <Tooltip
                                            label={"Reboot the script"}
                                            openDelay={500}
                                        >
                                            <StatusButton icon={<IoReload/>} name="running" setStatus={setStatus} setIsSubmit={setIsSubmit}/>
                                        </Tooltip>
                                    </Stack>
                                )
                                : null
                        }
                    </Box>
                )
                : null}
        </Stack>
    );
}

export default StatusBox;
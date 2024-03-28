import { useState } from "react";

import {
    Heading,
    Stack,
    Box,
    Tooltip,
    Button
} from "@chakra-ui/react";

import { IoPause, IoStop, IoPlay, IoSync, IoReload } from "react-icons/io5";
import hookUpdateItemStatus from "../../../hooks/items/update/hookUpdateItemStatus";


const StatusBox = ({itemId, itemStatus}) => {
    const [status, setStatus] = useState(false);

    const [isSubmit, setIsSubmit] = useState(false);

    hookUpdateItemStatus(isSubmit, setIsSubmit, itemId, status);

    return (
        <Stack>
            {itemStatus ?
                (
                    <Box alignSelf={"center"} alignItems={"center"} margin={"1%"}>
                        <Heading fontSize={"sm"} color={"cyan.700"} align={"center"} mb={3} style={{textTransform: 'capitalize'}}>
                            {itemStatus}
                        </Heading>
                        {
                            itemStatus === "off" ?
                                (
                                    <Tooltip
                                        label={"Run the script"}
                                        openDelay={500}
                                    >
                                        <Button
                                            leftIcon={<IoPlay/>}
                                            iconSpacing={null}
                                            onClick={() => {
                                                setStatus("running");
                                                setIsSubmit(true);
                                            }}
                                        />
                                    </Tooltip>
                                )
                                : null
                        }
                        {
                            itemStatus === "running" ?
                                (
                                    <Stack direction={"row"}>
                                        <Tooltip
                                            label={"Turn off"}
                                            openDelay={500}
                                        >
                                            <Button
                                                leftIcon={<IoStop/>}
                                                iconSpacing={null}
                                                onClick={() => {
                                                    setStatus("off");
                                                    setIsSubmit(true);
                                                }}
                                            />
                                        </Tooltip>
                                        <Tooltip
                                            label={"Pause"}
                                            openDelay={500}
                                        >
                                            <Button
                                                leftIcon={<IoPause/>}
                                                iconSpacing={null}
                                                onClick={() => {
                                                    setStatus("paused");
                                                    setIsSubmit(true);
                                                }}
                                            />
                                        </Tooltip>
                                        <Tooltip
                                            label={"Reboot the script"}
                                            openDelay={500}
                                        >
                                            <Button
                                                leftIcon={<IoSync/>}
                                                iconSpacing={null}
                                                onClick={() => {
                                                    setStatus("running");
                                                    setIsSubmit(true);
                                                }}
                                            />
                                        </Tooltip>
                                    </Stack>
                                )
                                : null
                        }
                        {
                            itemStatus === "paused" ?
                                (
                                    <Stack direction={"row"}>
                                        <Tooltip
                                            label={"Turn off"}
                                            openDelay={500}
                                        >
                                            <Button
                                                leftIcon={<IoStop/>}
                                                iconSpacing={null}
                                                onClick={() => {
                                                    setStatus("off");
                                                    setIsSubmit(true);
                                                }}
                                            />
                                        </Tooltip>
                                        <Tooltip
                                            label={"Restart"}
                                            openDelay={500}
                                        >
                                            <Button
                                                leftIcon={<IoReload/>}
                                                iconSpacing={null}
                                                onClick={() => {
                                                    setStatus("running");
                                                    setIsSubmit(true);
                                                }}
                                            />
                                        </Tooltip>
                                    </Stack>
                                )
                                : null
                        }
                        {
                            itemStatus === "unreachable" ?
                                (
                                    <Stack direction={"row"}>
                                        <Tooltip
                                            label={"Turn off"}
                                            openDelay={500}
                                        >
                                            <Button
                                                leftIcon={<IoStop/>}
                                                iconSpacing={null}
                                                onClick={() => {
                                                    setStatus("off");
                                                    setIsSubmit(true);
                                                }}
                                            />
                                        </Tooltip>
                                        <Tooltip
                                            label={"Reboot the script"}
                                            openDelay={500}
                                        >
                                            <Button
                                                leftIcon={<IoSync/>}
                                                iconSpacing={null}
                                                onClick={() => {
                                                    setStatus("running");
                                                    setIsSubmit(true);
                                                }}
                                            />
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
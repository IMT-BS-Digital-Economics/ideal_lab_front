import {Box, Flex, Text, Stack, Grid, GridItem, Heading, Divider, Tag, TagLabel} from "@chakra-ui/react";
import SetupElement from "./setupElement";
import TriggerAutoLaunch from "./triggerAutoLaunch";
import UploadFile from "./uploadFile";
import CreateDirectory from "./createDirectory";
import ControlStatus from "./status/controlStatus";
import DisplayAllLogs from "./log/displayAllLogs";
import UpdateArgs from "./update/updateArgs";

const RunPanel = ({project, unique_id}) => {
    return (
        <>
        {
            project.data ? (
                    <Grid
                        h="70vh"
                        w={"75vw"}
                        templateRows='repeat(5, 1fr)'
                        templateColumns='repeat(5, 1fr)'
                        gap={3}
                    >
                        <GridItem rowSpan={1} colSpan={3} borderRadius={"lg"}>
                            <Heading color={"teal"}>
                                Description
                            </Heading>
                            <Box bg={"teal"} padding={"2%"} borderRadius={"xl"} boxShadow={"xl"}>
                                <Flex direction={"column"}>
                                    {project.data && project.data.description ? <Text color={"white"} mt={"1%"}>{project.data.description}</Text> : null}
                                </Flex>
                            </Box>
                        </GridItem>
                        <GridItem rowSpan={4} colStart={1} colSpan={3} rowStart={2} borderRadius={"lg"}>
                            <Flex gap={2} direction={"column"}>
                                <Heading color={"teal"}>Setup</Heading>
                                {project.data.repository ? <SetupElement name={"Repository used"} value={project.data.repository}/> : null}
                                {project.data.executable ? <SetupElement name={"Executable selected"} value={project.data.executable}/> : null}
                                {project.data.arguments ? <SetupElement name={"Arguments"} value={project.data.arguments} editable={true} Content={UpdateArgs} unique_id={unique_id}/>: null}
                                {project.data.start_time ? <SetupElement name={"Time to start"} value={project.data.start_time} editable={true}/> : null}
                                <Flex gap={2}>
                                    {project.data && project.data.auto_launch !== undefined ? (<TriggerAutoLaunch unique_id={unique_id} auto_launch={project.data.auto_launch}/>) : null}
                                    {project.data ? <UploadFile unique_id={unique_id}/>: null}
                                    {project.data ? <CreateDirectory unique_id={unique_id}/> : null}
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={2} borderRadius={"lg"}>
                            <ControlStatus unique_id={unique_id}/>
                        </GridItem>
                        <GridItem rowStart={3} rowSpan={3} colSpan={2} borderRadius={"lg"}>
                            <DisplayAllLogs unique_id={unique_id}/>
                        </GridItem>
                    </Grid>
            ) : null
        }
        </>
    );
}

export default RunPanel;
import {Box, Flex, Text, Stack, Grid, GridItem, Heading, Divider, Tag, TagLabel} from "@chakra-ui/react";
import TriggerAutoLaunch from "./update/triggerAutoLaunch";
import UploadFile from "./update/uploadFile";
import CreateDirectory from "./update/createDirectory";
import ControlStatus from "./status/controlStatus";
import DisplayAllLogs from "./BoxParameter/dynamicContent/displayAllLogs";
import UpdateArgs from "./update/updateArgs";
import EditableArguments from "./BoxParameter/dynamicContent/editableArguments";
import BoxParameter from "./BoxParameter";
import StaticVal from "./BoxParameter/dynamicContent/staticVal";
import BoxParams from "../../constant/boxParams";
import EditableAutoStartTime from "./BoxParameter/dynamicContent/editableAutoStartTime";

const MonitoringPanel = ({project, unique_id}) => {
    return (
        <>
            {
                project.data &&
                <Grid
                    w={"100%"}
                    templateRows={'repeat(10, 1fr)'}
                    templateColumns={'repeat(10, 1fr)'}
                    gap={4}
                    h={"65vh"}
                >
                    <GridItem rowSpan={3} colSpan={3} bg={"white"} borderRadius={"lg"} boxShadow={"lg"} padding={"1em"}>
                        {project.data.repository && <BoxParameter name={BoxParams.repository.name} description={BoxParams.repository.description} Content={<StaticVal value={project.data.repository}/>}/>}
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={3} bg={"white"} borderRadius={"lg"} boxShadow={"lg"} padding={"1em"}>
                        {/*{project.data.arguments && <SetupElement name={"Arguments"} description={"Arguments added for runtime"}value={project.data.arguments} editable={true} Content={UpdateArgs} unique_id={unique_id}/>}*/}
                        {project.data.repository && <BoxParameter name={BoxParams.arguments.name} description={BoxParams.arguments.description} Content={<EditableArguments unique_id={unique_id} value={project.data.arguments}/>}/>}
                    </GridItem>
                    <GridItem rowSpan={6} colSpan={2} bg={"white"} borderRadius={"lg"} boxShadow={"lg"} padding={"1em"}>
                        {project.data.start_time && <BoxParameter name={BoxParams.autoTimeStart.name} description={BoxParams.autoTimeStart.description} Content={<EditableAutoStartTime unique_id={unique_id} value={project.data.start_time}/>}/>}
                    </GridItem>
                    <GridItem rowSpan={6} colSpan={2} bg={"white"} borderRadius={"lg"} boxShadow={"lg"} padding={"1em"}>
                        {project.data.auto_launch !== undefined && (<BoxParameter name={BoxParams.AutoStart.name} description={BoxParams.AutoStart.description} Content={<TriggerAutoLaunch unique_id={unique_id} auto_launch={project.data.auto_launch}/>}/>)}
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={3} bg={"white"} borderRadius={"lg"} boxShadow={"lg"} padding={"1em"}>
                        {project.data.executable && <BoxParameter name={BoxParams.executable.name} description={BoxParams.executable.description} Content={<StaticVal value={project.data.executable}/>}/>}
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={3} bg={"white"} borderRadius={"lg"} boxShadow={"lg"} padding={"1em"}>
                        {project.data && <BoxParameter name={BoxParams.createDirectory.name} description={BoxParams.createDirectory.description} Content={<CreateDirectory unique_id={unique_id}/>}/>}
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={4} bg={"white"} borderRadius={"lg"} boxShadow={"lg"} padding={"1em"}>
                        <BoxParameter name={BoxParams.logs.name} description={BoxParams.logs.description} Content={<DisplayAllLogs unique_id={unique_id}/>}/>
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={6} bg={"white"} borderRadius={"lg"} boxShadow={"lg"} padding={"1em"}>
                        {project.data && <BoxParameter name={BoxParams.uploadFile.name} description={BoxParams.uploadFile.description} Content={<UploadFile unique_id={unique_id}/>}/>}
                    </GridItem>
                </Grid>
            }
        </>
    );
}

export default MonitoringPanel;

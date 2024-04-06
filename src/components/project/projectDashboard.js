import { useState } from "react";
import {Box, Heading, Stack, IconButton, Flex, Text, Tabs, Tab, TabList, TabPanels, TabPanel} from "@chakra-ui/react";

import { FaArrowsRotate } from "react-icons/fa6";

import {useApiCallDataResp} from "../../hooks/callApi";
import ProjectsTab from "./index";
import MonitoringPanel from "./monitoringPanel";
import PulsatingCircle from "./status/pulsatingCircle";
import SettingsPanel from "./settings/settingsPanel";

const ProjectDashboard = ({unique_id}) => {
    const [project, setProject] = useState(false);

    useApiCallDataResp(
        'get',
        `projects/${unique_id}`,
        {},
        project,
        setProject
    )

    return (
        <Flex direction={"row"} h={"100%"}>
            <ProjectsTab unique_id={unique_id}/>
            <Box flex="1" h={"100%"} w={"100%"} bg={"teal.50"} padding={"1%"}>
                <Flex align={"center"} mb={"1%"}>
                    <IconButton
                        colorScheme='teal'
                        aria-label='Refresh'
                        size='lg'
                        icon={<FaArrowsRotate/>}
                        onClick={() => setProject(false)}
                    />
                    <Stack ml={"1%"} spacing={1}>
                        {project && project.data && project.data.title ? (<Heading color={"teal"}>{project.data.title}</Heading>): null}
                        {project && project.data && project.data.unique_id ? (<Text as="b" color={"teal.400"}>{project.data.unique_id}</Text>): null}
                        {project.data && project.data.description ? <Text color={"teal.400"} mt={"1%"}>{project.data.description}</Text> : null}
                    </Stack>
                    <Flex marginLeft={"auto"}>
                        {project && project.data ? <PulsatingCircle unique_id={unique_id}/> : null}
                    </Flex>
                </Flex>
                <Flex>
                    <Tabs variant='soft-rounded' colorScheme='teal' size={"lg"} w={"100%"}>
                        <TabList>
                            <Tab>Monitor</Tab>
                            <Tab>Settings</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <MonitoringPanel project={project} unique_id={unique_id}/>
                            </TabPanel>
                            <TabPanel>
                                <SettingsPanel unique_id={unique_id}/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </Box>
        </Flex>
    );
}

export default ProjectDashboard;
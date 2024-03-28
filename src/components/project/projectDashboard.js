import { useState } from "react";
import {Box, Heading, Stack, IconButton, Flex, Text, Tabs, Tab, TabList, TabPanels, TabPanel} from "@chakra-ui/react";

import { FaArrowsRotate } from "react-icons/fa6";

import {useApiCallDataResp} from "../../hooks/callApi";
import Projects from "./index";
import RunPanel from "./runPanel";
import PulsatingCircle from "./status/pulsatingCircle";

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
        <Stack direction={"row"} spacing={5}>
        <Projects/>
        <Box h={"90vh"} w={"100%"} borderRadius={"lg"} bg={"gray.200"} padding={"1%"}>
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
                </Stack>
                <Flex marginLeft={"auto"}>
                    {project && project.data ? <PulsatingCircle unique_id={unique_id}/> : null}
                </Flex>
            </Flex>
            <Flex>
                <Tabs variant='soft-rounded' colorScheme='teal' size={"lg"}>
                    <TabList>
                        <Tab>Run</Tab>
                        <Tab>Settings</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <RunPanel project={project} unique_id={unique_id}/>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Box>
        </Stack>
    );
}

export default ProjectDashboard;
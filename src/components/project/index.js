import { useState } from "react";

import {Flex} from "@chakra-ui/react";

import {useApiCallDataResp} from "../../hooks/callApi";
import ServiceList from "../service/serviceList";
import CreateProject from "./create/createProject";
import ControlStatus from "./status/controlStatus";

const ProjectsTab = ({isCreatePage = false, unique_id = undefined}) => {
    const [projects, setProjects] = useState(false);

    useApiCallDataResp(
        'get',
        'projects/',
        {},
        projects,
        setProjects
    )

    const tabContent = projects !== false && projects && projects.data ? (
        <ServiceList
            data={projects.data.details}
            name={"Projects tab"}
            unique_id={unique_id}
        />
    ) : null;

    return (
        <>
        {
            isCreatePage ? (
                <Flex flex={"1"}>
                    {tabContent}
                    <CreateProject/>
                </Flex>
            ) : <>
                {tabContent}
            </>
        }
        </>
    );
}

export default ProjectsTab
import { useState } from "react";

import {useApiCallDataResp} from "../../hooks/callApi";
import ServiceList from "../service/serviceList";

const Projects = () => {
    const [projects, setProjects] = useState(false);

    useApiCallDataResp(
        'get',
        'projects/',
        {},
        projects,
        setProjects
    )

    return (
        <>
            {
                projects !== false && projects && projects.data ? (
                    <ServiceList
                        data={projects.data.details}
                    />
                ) : null
            }
        </>
    );
}

export default Projects
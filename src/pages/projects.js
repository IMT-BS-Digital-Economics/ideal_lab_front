import NavBar from "../components/layout/navBar";
import ProjectsTab from "../components/project";
import {Flex} from "@chakra-ui/react";

const PageProjects = () => {
    return (
        <Flex direction={"column"} h={"100vh"} w={"100vw"}>
            <NavBar HomeButton={false}/>
            <ProjectsTab isCreatePage={true}/>
        </Flex>
    )
}

export default PageProjects;

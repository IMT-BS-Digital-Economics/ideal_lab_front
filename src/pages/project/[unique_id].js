import { useRouter } from 'next/router'

import NavBar from "../../components/layout/navBar";
import ProjectDashboard from "../../components/project/projectDashboard";


const ProjectPage = () => {
    const router = useRouter()

    const { unique_id } = router.query

    return (
        <>
            <NavBar HomeButton={false}/>
            <ProjectDashboard unique_id={unique_id}/>
        </>
    );
}

export default ProjectPage;
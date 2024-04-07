import { useRouter } from 'next/router';

import { Flex } from '@chakra-ui/react';

import { useEffect } from 'react';

import NavBar from '../../components/layout/navBar';
import ProjectDashboard from '../../components/project/projectDashboard';

const ProjectPage = () => {
    const router = useRouter();

    const { unique_id } = router.query;

    useEffect(() => {}, [unique_id]);

    return (
        <Flex direction={'column'} h={'100vh'} w={'100vw'}>
            <NavBar />
            <ProjectDashboard unique_id={unique_id} />
        </Flex>
    );
};

export default ProjectPage;

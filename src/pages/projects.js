import { Flex } from '@chakra-ui/react';

import NavBar from '../components/layout/navBar';
import ProjectsTab from '../components/project';

const PageProjects = () => {
    return (
        <Flex direction={'column'} h={'100vh'} w={'100vw'}>
            <NavBar />
            <ProjectsTab isCreatePage={true} />
        </Flex>
    );
};

export default PageProjects;

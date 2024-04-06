import { useState } from 'react';

import { Flex } from '@chakra-ui/react';

import { useApiCallDataResp } from '../../hooks/callApi';
import ServiceList from '../service/serviceList';
import CreateProject from './create/createProject';

const ProjectsTab = ({ isCreatePage = false, unique_id = undefined }) => {
  const [projects, setProjects] = useState(false);

  useApiCallDataResp('get', 'projects/', {}, projects, setProjects);

  const tabContent = (
    <ServiceList
      data={projects && projects.data && projects.data.details}
      name={'Projects tab'}
      unique_id={unique_id}
    />
  );

  return (
    <>
      {isCreatePage ? (
        <Flex flex={'1'}>
          {tabContent}
          <CreateProject />
        </Flex>
      ) : (
        <>{tabContent}</>
      )}
    </>
  );
};

export default ProjectsTab;

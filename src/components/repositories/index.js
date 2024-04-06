import ServiceList from '../service/serviceList';
import { useApiCallDataResp } from '../../hooks/callApi';
import { useState } from 'react';

const Repositories = () => {
  const [repositories, setRepositories] = useState(false);

  useApiCallDataResp('get', 'repositories/', {}, repositories, setRepositories);

  return (
    <ServiceList
      data={repositories && repositories.data}
      name={'Repositories'}
    />
  );
};

export default Repositories;

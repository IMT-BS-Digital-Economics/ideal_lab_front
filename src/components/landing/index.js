import { useState } from 'react';

import NextLink from 'next/link';

import {Heading, Stack, Button, ScaleFade, Text} from '@chakra-ui/react';

import AnimatedParticles from './animatedParticles';

import hookUserMe from '../../hooks/user/hookUserMe';

import ServiceBox from '../service/serviceBox';

const Landing = () => {
  const [userData, setUserData] = useState(false);

  hookUserMe({ userData, setUserData });

  return (
    <>
      <div>
        <AnimatedParticles />
      </div>
      <div style={{ marginTop: '25%' }}>
        <Stack direction={'column'} spacing={5} align={'center'}>
          <Heading size={'4xl'} color={'teal'}>
            <Text as={"span"} color={"teal.100"}>Ideal Lab</Text> DashBoard
          </Heading>
          {userData ? (
            <Stack direction={'row'} spacing={5} align={'center'}>
              <ServiceBox
                name={'Projects'}
                description={'Monitor you project'}
                path={'/projects'}
              />
              <ServiceBox
                name={'Repositories'}
                description={'Manage repositories to use'}
                path={'/repositories'}
              />
            </Stack>
          ) : null}
        </Stack>
      </div>
    </>
  );
};

export default Landing;

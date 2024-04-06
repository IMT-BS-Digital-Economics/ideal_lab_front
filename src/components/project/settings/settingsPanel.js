import { Flex, Heading, Stack, Text, Box } from '@chakra-ui/react';
import DeleteModal from './deleteModal';
import AddEnvironmentVariableModal from './addEnvironmentVariableModal';
import DisplayEnvironmentVarModal from './displayEnvironmentVarModal';

const SettingsPanel = ({ unique_id }) => {
  return (
    <Stack direction={'column'} alignItems={'flex-start'} spacing={3}>
      <Box
        boxShadow={'lg'}
        borderRadius={'lg'}
        w={'100%'}
        h={'14vh'}
        p={'1em'}
        bg={'white'}
      >
        <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
          <Flex direction={'column'}>
            <Heading fontSize={'md'}>Add environment variable</Heading>
            <Text fontSize={'md'} maxW={'50%'}>
              You can add any environment variable to your project
            </Text>
          </Flex>
          <AddEnvironmentVariableModal unique_id={unique_id} />
        </Flex>
      </Box>
      <Box
        boxShadow={'lg'}
        borderRadius={'lg'}
        w={'100%'}
        h={'14vh'}
        p={'1em'}
        bg={'white'}
      >
        <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
          <Flex direction={'column'}>
            <Heading fontSize={'md'}>See environment variable</Heading>
            <Text fontSize={'md'} maxW={'50%'}>
              You can see any environment variable of your project
            </Text>
          </Flex>
          <DisplayEnvironmentVarModal unique_id={unique_id} />
        </Flex>
      </Box>
      <Box
        boxShadow={'lg'}
        borderRadius={'lg'}
        w={'100%'}
        h={'14vh'}
        p={'1em'}
        bg={'white'}
      >
        <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
          <Flex direction={'column'}>
            <Heading fontSize="md" color={'red'}>
              Danger Zone
            </Heading>
            <Text maxW="50%" fontSize={'md'}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              If you want to delete your project. You're at the right place but{' '}
              <Text as={'b'}>
                you must be aware that all the data linked to the project will
                be erased.
              </Text>
            </Text>
          </Flex>
          <DeleteModal unique_id={unique_id} />
        </Flex>
      </Box>
    </Stack>
  );
};

export default SettingsPanel;

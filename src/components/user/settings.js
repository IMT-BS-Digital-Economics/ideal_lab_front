import { useState } from 'react';

import { Button, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import hookSignOut from '../../hooks/auth/hookSignOut';

import ModalResetEmail from './modalResetEmail';
import DelUser from './delUser';
import EditPassword from './editPassword';

const Settings = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    hookSignOut({ isSubmit, setIsSubmit });

    return (
        <Flex
            flex={'1'}
            h={'100%'}
            w={'100%'}
            direction={'column'}
            gap={{ base: 2, md: 6 }}
        >
            <Heading>Change your email</Heading>
            <Stack
                direction={{ base: 'column', lg: 'row' }}
                alignItems={'center'}
            >
                <Text fontSize={'lg'} mr={'3'}>
                    You will receive a confirmation email following the
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    change of your account's email
                </Text>
                <ModalResetEmail />
            </Stack>
            <Divider />
            <Heading>Change your password</Heading>
            <Stack
                direction={{ base: 'column', lg: 'row' }}
                alignItems={'center'}
            >
                <Text mr={'3'} fontSize={'lg'}>
                    You will receive a confirmation email for editing your
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    account's password via account
                </Text>
                <EditPassword />
            </Stack>
            <Divider />
            <Stack>
                <Heading color={'red'}>Danger Zone</Heading>
                <Text fontSize={'lg'}>
                    If you want to sign out or just delete your account.
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    You're at the right place but you must be aware that your
                    data will be erased forever
                </Text>
                <Stack direction={'row'} spacing={6} alignSelf={'center'}>
                    <DelUser />
                    <Button
                        colorScheme={'red'}
                        size={'lg'}
                        onClick={() => setIsSubmit(true)}
                    >
                        Sign out
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
};

export default Settings;

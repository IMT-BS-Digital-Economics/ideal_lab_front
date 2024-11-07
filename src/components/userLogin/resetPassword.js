import { useState } from 'react';

import {
    Center,
    Heading,
    Text,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Stack,
    Fade,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    ScaleFade,
    PopoverCloseButton,
    PopoverArrow,
    PopoverBody,
    useColorModeValue,
    Flex
} from '@chakra-ui/react';

import { BsCheckLg } from 'react-icons/bs';
import { FcAbout } from 'react-icons/fc';

import hookForgotPassword from '../../hooks/user/hookForgotPassword';

const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);

    const bg = useColorModeValue('teal.50', 'teal.900');

    hookForgotPassword({ isSubmit, setIsSubmit, email });
    return (
        <Flex flex="1" align={'center'} justify={'center'} bg={bg}>
            {
                !isSubmit ? (
                    <Stack spacing={6}>
                        <Heading color="teal" size={'2xl'}>
                            Reset your password
                        </Heading>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input
                                width={'100%'}
                                variant={'filled'}
                                size={'lg'}
                                type={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                shadow={'md'}
                            />
                            <FormHelperText>
                                Enter your email address linked to your account
                            </FormHelperText>
                        </FormControl>
                        <Center marginTop={'2%'}>
                            <Fade in={!!email}>
                                <Button
                                    colorScheme={'teal'}
                                    size={'lg'}
                                    w={'75%'}
                                    loadingText={'Submitting'}
                                    onClick={() => setIsSubmit(true)}
                                    shadow={'md'}
                                >
                                    Send
                                </Button>
                            </Fade>
                        </Center>
                    </Stack>
            ) : <ScaleFade in={isSubmit} initialScale={0.9}>
                    <Flex direction={"column"} alignItems={"center"}>
                        <Heading>An email has been sent to <Text as="span" color="teal.500">{email}</Text></Heading>
                        <Text color="teal.500">
                            If an email address is associated with your account, you'll soon receive a message with instructions to reset your password.
                        </Text>
                    </Flex>
                </ScaleFade>}
        </Flex>
    );
};

export default ResetPassword;
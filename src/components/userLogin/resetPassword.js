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
} from '@chakra-ui/react';

import { BsCheckLg } from 'react-icons/bs';
import { FcAbout } from 'react-icons/fc';

import hookForgotPassword from '../../hooks/user/hookForgotPassword';

const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);

    hookForgotPassword({ isSubmit, setIsSubmit, email });

    return (
        <div>
            {!isSubmit ? (
                <Center margin={'10%'}>
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
                </Center>
            ) : null}
            <ScaleFade in={isSubmit} initialScale={0.9}>
                <Center margin={'10%'}>
                    <Stack>
                        <Center>
                            <BsCheckLg size={'6%'} />
                        </Center>
                        <Heading size={'lg'}>An email has been sent</Heading>
                        <Center>
                            <Popover>
                                <PopoverTrigger>
                                    <Button
                                        leftIcon={<FcAbout />}
                                        size="lg"
                                        iconSpacing={false}
                                    />
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <Text margin={'2%'}>
                                            If you have an email address linked
                                            to an account, you will get soon a
                                            mail to reset your password
                                        </Text>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Center>
                    </Stack>
                </Center>
            </ScaleFade>
        </div>
    );
};

export default ResetPassword;

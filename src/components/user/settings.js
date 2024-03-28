import { useState } from "react";

import {
    Button,
    Divider,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";

import hookSignOut from "../../hooks/auth/hookSignOut";

import ModalResetEmail from "./modalResetEmail";
import DelUser from "./delUser";
import EditPassword from "./editPassword";

const Settings = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    hookSignOut({isSubmit, setIsSubmit})

    return (
        <div>
            <Stack direction={"column"} spacing={6} alignItems={"flex-start"}>
                <Heading>Change your email</Heading>
                <Stack direction={"row"}  alignItems={"center"}>
                    <Text  fontSize={"lg"} mr={"3"}>You will receive a confirmation email following the change of your account's email</Text>
                    <ModalResetEmail/>
                </Stack>
                <Divider/>
                <Heading>Change your password</Heading>
                <Stack direction={"row"} alignItems={"center"}>
                    <Text mr={"3"} fontSize={"lg"}>You will receive a confirmation email for editing your account's password via account</Text>
                    <EditPassword/>
                </Stack>
                <Divider/>
                <Heading color={"red"}>Danger Zone</Heading>
                <Text fontSize={"lg"}>If you want to sign out or just delete your account. You're at the right place but you must be aware that your data will be erased forever</Text>
                <Stack direction={"row"} spacing={6} alignSelf={"center"}>
                    <DelUser/>
                    <Button
                        colorScheme={"red"}
                        size={"lg"}
                        onClick={() => setIsSubmit(true)}
                    >
                        Sign out
                    </Button>
                </Stack>
            </Stack>
        </div>
    );
}

export default Settings;